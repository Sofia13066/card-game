import './App.css';

import React, {useState} from 'react';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
// import { useStateWithCallback } from './actions/useStateWithCallback';

const App = () => {
    const [page, setPage] = useState('Start')
    const [name, setName] = useState('Player')
    const [compWins, setCompWins] = useState(0)
    const [playerWins, setPlayerWins] = useState(0)
    const [storyWins, setStoryWins] = useState(0)
    const [storyLosses, setStoryLosses] = useState(0)
    // const [storyWins, setStoryWins] = useStateWithCallback()
    // const [storyLosses, setStoryLosses] = useStateWithCallback();


    const changePage = (page, ...args) => {
        switch (args.length) {
            case 0:
                setPage(page)
                break
            case 1:
                setPage(page)
                setName(args[0])
                break
            case 2:
                setPage(page)
                setCompWins(args[0])
                setPlayerWins(args[1])
                // setStoryWins(storyWins + args[1])
                // setStoryLosses(storyLosses + args[0])
        }
    }

    
    switch (page) {
        case 'Game':
            return <Game changePage={changePage} name={name}/>
        case 'Result':
            return <Result changePage={changePage} compWins={compWins}
                           playerWins={playerWins} storyLossesChange={setStoryLosses}
                           storyWinsChange={setStoryWins} storyLosses={storyLosses}
                           storyWins={storyWins}/>
        default:
            return <Start changePage={changePage}/>
    }
}

export default App;