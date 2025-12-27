import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        score: 0,
        turretX: 0,
        laserArray: [],
        alienArray: [],
        nextLaserId: 0,
        nextAlienId: 0,
        gameOver: false
    },
    reducers: {
        moveTurretRight: (state, action) => {
            state.turretX += action.payload;
        },
        moveTurretLeft: (state, action) => {
            state.turretX -= action.payload;
        },
        fireLaser: (state, action) => {
            state.laserArray.push({...action.payload, laserID: state.nextLaserId, collisionDetected: false, currentYPosition: action.payload.initialYPosition});
            state.nextLaserId += 1;
        },
        moveAllLasers: (state) => {
            state.laserArray.forEach(laser => laser.currentYPosition += laser.incrementYDistance);
            state.laserArray = state.laserArray.filter(laser => laser.currentYPosition < 650);
        },
        spawnAlien: (state, action) => {
            state.alienArray.push({...action.payload, alienID: state.nextAlienId, collisionDetected: false, currentXPosition: action.payload.initialXPosition, currentYPosition: action.payload.initialYPosition});
            state.nextAlienId += 1;
        },
        moveAllAliens: (state) => {
            const landingHeight = -450;
            state.alienArray.forEach(alien => {
                alien.currentYPosition += alien.incrementYDistance;
                if (alien.currentYPosition <= landingHeight+250) {
                    state.gameOver = true;
                }
            });
            state.alienArray = state.alienArray.filter(alien => alien.currentYPosition > landingHeight);
        },
        detectCollisions: (state) => {
            state.alienArray.forEach(alien => {
                state.laserArray.forEach(laser => {
                    if (!alien.collisionDetected && !laser.collisionDetected &&
                        Math.abs(alien.currentXPosition - laser.initialXPosition) < 30 &&
                        Math.abs(alien.currentYPosition - laser.currentYPosition) < 30) {
                        alien.collisionDetected = true;
                        laser.collisionDetected = true;
                        state.score += 10;
                    }
                });
            });
            state.alienArray = state.alienArray.filter(alien => !alien.collisionDetected);
            state.laserArray = state.laserArray.filter(laser => !laser.collisionDetected);
        },
        detectLandings: (state, action) => {
            state.alienArray.forEach(alien => {
                
            })
        }
    }
});

export const { moveTurretRight, moveTurretLeft, fireLaser, moveAllLasers, spawnAlien, moveAllAliens, detectCollisions } = gameSlice.actions;

export default gameSlice.reducer;