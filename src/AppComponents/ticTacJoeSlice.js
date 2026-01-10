import { createSlice } from "@reduxjs/toolkit";

const ticTacJoeSlice = createSlice({
    name: 'game',
    initialState: {
                //declare multi-player variables and variables used for both multi and single player games
        playingSpaceIDArray: [],
        playingPiece: 'X',
        gameBoard: ['','','','','','','','',''],
        winningConditions: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
        winningConditionIndex: null,
        XLocations: [],
        OLocations: [],
        multiplayerGame: false,
        singlePlayerGame: false,
        mPlayerXWins: 0,
        mPlayerOWins: 0,
        mPlayerTotalGames: 0,
        //declare variables for single player game
        roundNumber: 1,
        userPlayingPiece: 'O',
        computerPlayingPiece: 'X',
        sPlayerComputerWins: 0,
        sPlayerUserWins: 0,
        sPlayerTotalGames: 0,

        //Initialize user interface

        xWinsCountValue: <p id="x-wins-count-value" class="stat-value">0</p>,
        oWinsCountValue: <p id="o-wins-count-value" class="stat-value">0</p>,
        totalMpGamesCountValue: <p id="total-mp-games-count-value" class="stat-value">0</p>,
        dialogBoxContent: <p id="dialog-box-content">Game Ready! &#128515; </p>,
        computerWinsCountValue: <p id="computer-wins-count-value" class="stat-value">0</p>,
        userWinsCountValue:<p id="user-wins-count-value" class="stat-value">0</p>,
        totalSpGamesCountValue: <p id="total-sp-games-count-value" class="stat-value">0</p>,
        gameBoardSection: (
                <section id='game-board' class="game-board">
                    <div class="playing-space" id ="ps-0"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-1"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-2"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-3"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-4"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-5"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-6"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-7"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                    <div class="playing-space" id ="ps-8"onClick={playMoveSound} style={{fontSize: '3rem'}}>-</div>
                </section>
            )
        
    },
    reducers: {
        move: (state, action) => {
            state.gameBoard[action.payload.space] = action.payload.playingPiece;
        },
        updateDialogBoxContent: (state, action) =>{
            state.dialogBoxContent = action.payload;
        }
        
    }
});

export const {move, updateDialogBoxContent} = ticTacJoeSlice.actions;

export default ticTacJoeSlice.reducer;