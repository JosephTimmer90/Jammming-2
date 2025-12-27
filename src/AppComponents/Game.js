import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { moveTurretLeft, moveTurretRight, fireLaser, moveAllLasers, spawnAlien, moveAllAliens, detectCollisions } from './gameSlice';

function Game(){
    const dispatch = useDispatch();
    const score = useSelector(state => state.game.score);
    const turretX = useSelector(state => state.game.turretX);
    const laserArray = useSelector(state => state.game.laserArray);
    const alienArray = useSelector(state => state.game.alienArray);
    const gameOver = useSelector(state => state.game.gameOver);

    useEffect(() => {

        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    dispatch(moveTurretLeft(10));
                    break;
                case 'ArrowRight':
                    dispatch(moveTurretRight(10));
                    break;
                case 'ArrowUp':
                    dispatch(fireLaser(
                        {
                        initialYPosition: -450,
                        incrementYDistance: 25,
                        initialXPosition: turretX
                        })
                    );
                    break;
                default: break;
            }
        };

        const collisionDetectionLoop = setInterval(() => {
            dispatch(detectCollisions())
            },
            10);

        const spawnLoop = setInterval(() => {
            const randomX = Math.floor(Math.random() * 1800);
            dispatch(spawnAlien({
                initialXPosition: randomX,
                initialYPosition: 125,
                incrementYDistance: -5
            }));
        }, 2000);

        const gameLoop = setInterval(() => {
            dispatch(moveAllLasers());
            dispatch(moveAllAliens());
        }, 100);

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearInterval(gameLoop);
            clearInterval(spawnLoop);
            clearInterval(collisionDetectionLoop);
        };
    }, [dispatch, turretX]);

    return (
        <div className="GameArea">
            <section className="GameHeader">
                <div>Score: {score}</div>
                <div>Equipment: Standard Laser</div>
                <div>Level: 1</div>
                <div>TurretX: {turretX}</div>
            </section>

            <section className="GamePieceArea" style={{ position: 'relative', height: '200px' }}>
                {alienArray.map((alien, index) => (
                    <div key={index} className='Alien' style={{position: 'absolute', backgroundColor: 'yellow', left: alien.currentXPosition + 'px', bottom: alien.currentYPosition + 'px', width: '60px', height: '60px', transform: 'translateX(-50%)'}}>{alien.alienID}</div>
                ))}
                {laserArray.map((laser, index) => (
                   <div key={index} className="Laser" style={{ position: 'absolute', bottom: (laser.currentYPosition) + 'px', left: laser.initialXPosition + 'px', transform: 'translateX(-50%)' }}>{laser.laserID}</div> 
                ))}
                <div className="Turret" style={{ position: 'absolute', left: turretX + 'px', bottom: '0px', transform: 'translateX(-50%)' }}>Turret</div>
                {gameOver && (
                    <div className="GameOverDialog" style={{ position: 'absolute', left: '25vw', top: '15vh', width: '50vw', height: '60vh'}}>
                        <h1>Game Over</h1>
                        <p>Score: {score}</p>
                    </div>
                )}
            
            </section>

            <section className="GameFooter">
                <div>Game Footer</div>
            </section>
        </div>
        
            
    )
}

export default Game;