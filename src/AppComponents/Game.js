import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
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
    const minBigScreen = 1023;
    const isBigScreen = useMediaQuery({query: '(min-width: 1023)' })
    const isMedScreen = useMediaQuery({query: '(min-width: 767)'})
    const isTabScreen = useMediaQuery({query: '(min-width: 426)'})
    const isBigMobile = useMediaQuery({query: '(min-width: 376'})
    const screenWidth = window.innerWidth;

        const handleOnScreenArrowLeft = (event) => {
            dispatch(moveTurretLeft(10));
        }

        const handleOnScreenArrorRight = (event) => {
            dispatch(moveTurretRight(10));
        }

        const handleOnScreenFireWeapon = (event) => {
            dispatch(fireLaser(
                        {
                        initialYPosition: 10,
                        incrementYDistance: 25,
                        initialXPosition: turretX
                        })
                    );
        }

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
            const maxRandomXValue =  screenWidth;
            let initialYPosition = 125
            if(screenWidth<=500){
                initialYPosition = 475
            }
            const randomX = Math.floor(Math.random() * maxRandomXValue);
            dispatch(spawnAlien({
                initialXPosition: randomX,
                initialYPosition: initialYPosition,
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
    }, [dispatch, turretX, isBigScreen, isMedScreen, isTabScreen, isBigMobile, screenWidth]);

    return (
        <>
            <MediaQuery minWidth = {minBigScreen}>
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
                        <div className="Turret" style={{ position: 'absolute', left: turretX + 'px', top: '62vh', transform: 'translateX(-50%)' }}>Turret</div>
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
            </MediaQuery>

            <MediaQuery maxWidth={450}>
                <div className="GameArea">
                    <section className="GameHeader">
                        <div>Score: {score}</div>
                        <div>Equipment: Standard Laser</div>
                        <div>Level: 1</div>
                        <div>TurretX: {turretX}</div>
                    </section>

                    <section className="GamePieceArea">
                        {alienArray.map((alien, index) => (
                            <div key={index} className='Alien' style={{position: 'absolute', backgroundColor: 'yellow', left: alien.currentXPosition + 'px', bottom: alien.currentYPosition + 'px', width: '60px', height: '60px', transform: 'translateX(-50%)'}}>{alien.alienID}</div>
                        ))}
                        {laserArray.map((laser, index) => (
                        <div key={index} className="Laser" style={{ position: 'absolute', bottom: (laser.currentYPosition) + 'px', left: laser.initialXPosition + 'px', transform: 'translateX(-50%)' }}>{laser.laserID}</div> 
                        ))}
                        <div className="Turret" style={{ position: 'absolute', left: turretX + 'px', bottom: '2.5vh', transform: 'translateX(-50%)' }}>Turret</div>
                        {gameOver && (
                            <div className="GameOverDialog" style={{ display: 'none', position: 'absolute', left: '25vw', top: '15vh', width: '45vw', height: '30vh'}}>
                                <h1>Game Over</h1>
                                <p>Score: {score}</p>
                            </div>
                        )}
                    
                    </section>

                    <section className="GameFooter">
                        <div className="GameFooterContainer">
                            <button className="GameButton" onMouseDown={handleOnScreenArrowLeft}>MoveLeft</button>
                            <button className="FireButton" onMouseDown={handleOnScreenFireWeapon}>Fire Weapon</button>
                            <button className="GameButton" onMouseDown={handleOnScreenArrorRight}>MoveRight</button>
                        </div>
                    </section>
                </div>
            </MediaQuery>
        </>  
    )
}

export default Game;