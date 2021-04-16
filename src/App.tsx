import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [keyword, setKeyword] = useState('');

    const [renderCount] = useState({value: 1});
    renderCount.value++;

    useEffect(() => {
        const currentKeyword = decodeURI(window.location.pathname.slice(1));
        if (currentKeyword.length > 0) {
            setKeyword(currentKeyword);
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {keyword.length > 0 ? (
                    <p>
                        You are searching [<code>{keyword}</code>], and I working about that.
                    </p>
                ) : (
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                )}
                <span>rendered {renderCount.value} times!</span>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
