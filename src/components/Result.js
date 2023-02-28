import React, {useState, useCallback, useEffect, useRef} from 'react';
import { useStateWithCallback } from '../actions/useStateWithCallback';

const Result = (props) => {

    let res;
    // const [isWin, setIsWin] = useState(0);
    // const [isLoss, setIsLoss] = useState(0);


    const getResult = () => {
        
        if (props.playerWins > props.compWins){

            let res = () => props.setStoryWins(current => current + 1)
            // res()
            console.log(props.storyWins);
            // setIsWin(1);
            // console.log(isWin);
            return 'You won'

        }
        if (props.playerWins < props.compWins){
            
            // let res = () => props.setStoryLosses(props.storyLosses => props.storyLosses + 1)
            const def = (props) => { return (props.setStoryLosses(current => current + 1)); };
        
            // setIsLoss(1);
            // console.log(isLoss);
            return 'You lost'

        }
        return 'DRAW'
    }

    useEffect(() => {
        res = getResult();
        if(res == "You won"){
        let res = () => props.setStoryWins(current => current + 1)
        // props.setStoryWins(
        //     (prevState) => prevState + 1,
        //     (prevState, currentState) => dispatch(myaction(prevState))
        //   );
        }

    }, [])
    

    return (
        <div>
            <h1>{res} the last game</h1>
            <h2>{props.playerWins}-{props.compWins}</h2><br/>
            <h2>Game statistics</h2>
            <h2>Wins: {props.storyWins} ---- Losses: {props.storyLosses}</h2>
            <button onClick={() => props.changePage('Game')}>Again?</button>
        </div>
    );
};

export default Result;