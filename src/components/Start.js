import React, {useState} from 'react';

const Start = (props) => {
    const [name, setName] = useState('')
    return (
        <div>
            <h1>Ready to war</h1>
            <input type={'text'} placeholder={'Enter your name'}
                   onChange={event => setName(event.target.value)}/>
            <button onClick={() => props.changePage('Game', name)}>Start</button>
        </div>
    );
}

export default Start;