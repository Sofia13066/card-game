import React, {useEffect, useState} from 'react';

const Game = (props) => {

    const [compCard, setCompCard] = useState('Computer card')
    const [playerCard, setPlayerCard] = useState('Player card')
    const [compCards, setCompCards] = useState([])
    const [playerCards, setPlayerCards] = useState([])
    const [compWins, setCompWins] = useState(0)
    const [playerWins, setPlayerWins] = useState(0)

    const handleClickNext = () => {
        if (playerCards.length) {
            const cCard = compCards.pop()
            const pCard = playerCards.pop()
            let compWinsTemp = compWins
            let playerWinsTemp = playerWins


            if (cCard.rank > pCard.rank)
                compWinsTemp++
            else if (cCard.rank < pCard.rank)
                playerWinsTemp++
            else if (cCard.rank == pCard.rank){

                if(cCard.nominal > pCard.nominal)
                    compWinsTemp++
                else if (cCard.nominal < pCard.nominal)
                    playerWinsTemp++

            }
            
            setCompCard(`${cCard.value}, ${cCard.suit}`);
            setPlayerCard(`${pCard.value}, ${pCard.suit}`);
            setCompWins(compWinsTemp)
            setPlayerWins(playerWinsTemp)

        } else
            props.changePage('Result', compWins, playerWins)
    }

    const deskGeneration = () => {
        const desk = []
        const suits = ['♠ spade', '♢ diamond', '♣ club', '♡ heart']
        for (let i = 0; i < suits.length; i++) {
            for (let j = 2; j <= 14; j++) {
                let v = j
                if (j === 11)
                    v = 'J'
                if (j === 12)
                    v = 'Q'
                if (j === 13)
                    v = 'K'
                if (j === 14)
                    v = 'A'
                desk.push({suit: suits[i], rank: j, value: v, nominal: i})
            }
        }
        for (let i = desk.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [desk[i], desk[j]] = [desk[j], desk[i]]
        }
        return desk
    }

    useEffect(() => {
        const desk = deskGeneration()
        setCompCards(desk.slice(0, desk.length / 2))
        setPlayerCards(desk.slice(desk.length / 2, desk.length))
    }, [])


    return (
        <div>
            <h1>Computer</h1>
            <h2>{compCard}</h2>
            <h2>{playerCard}</h2>
            <h1>{props.name}</h1>
            <button onClick={handleClickNext}>Next</button>
        </div>
    );
}

export default Game;

