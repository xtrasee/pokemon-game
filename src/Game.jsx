import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { createRandomArray, shuffleArray } from "../utilities.js";
import Card from './components/Card.jsx'
import "./Game.css"

export default function Game({ size }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [idList, setIdList] = useState(createRandomArray(size));
    const [clickedIdList, setClickedIdList] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const promises = idList.map((id) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        );

        // waits for all promises in the arr to resolve
        Promise.all(promises)
            .then((responses) => Promise.all(responses.map((res) =>
                res.json())))
            .then((list) => {
                setPokemonList(list);
            })
            .catch((err) => {
                setError(err);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        // clean up function
        return (() => {
            setPokemonList([]);
            setError(null);
            setLoading(false);
        })
        // idList specifies when effect should be rerun aka when 'idList' changes
    }, [idList]);

    function handleCardClick(id) {
        if (clickedIdList.includes(id)) {
            setGameOver(true);
            if (score > highScore) {
                setHighScore(score);
            }
        }
        else {
            setClickedIdList([...clickedIdList, id]);
            setScore(score + 1);
            if (score + 1 === size) {
                setHighScore(size);
                setGameOver(true);
            }
            else {
                setPokemonList((prevPokemonList) =>
                    shuffleArray(prevPokemonList)
                );
            }
        }
    }

    function handleNewGame() {
        setScore(0);
        setGameOver(false);
        setIdList(createRandomArray(size));
        setClickedIdList([]);
    }

    if (gameOver == true) return (
        <div className="banner">
            {score == size ?
                <>
                    <div className="ending-p">
                        You Won!
                    </div>
                    <img src="/images/pikachu.png" alt="happy pikachu" width='400px' className="winPic"/>
                </>
                :
                <>
                    <div className="ending-p">
                        Game Over
                    </div>
                    <img src="/images/surprised-pikachu.gif" alt="shocked pikachu" className="gameOverPic"/>
                </>
            }
            <div className="score-container">
                <p>Score: {score}</p>
                <p>highScore: {highScore}</p>
            </div>
            <div className="options">
                <button onClick={() => handleNewGame()}>New Game</button>
                <Link to="/">
                    <button>
                        Main Menu
                    </button>
                </Link>
            </div>
        </div>
    )
    else return (
        <>
            {loading === false ?
                <>
                    <div className="header">
                        <Link to="/">
                            <img src="/images/logo.png" className="game-logo"></img>
                        </Link>
                    </div>
                    <div className="score-container">
                        <p>Score: {score}</p>
                        <p>highScore: {highScore}</p>
                    </div>
                    <div className="deck">
                        {pokemonList.map((pokemonData) => (
                            < button
                                key={pokemonData.id}
                                onClick={() => {
                                    handleCardClick(pokemonData.id);
                                }}
                            >
                                <Card pokemon={pokemonData} />
                            </button>
                        ))}
                    </div>
                </>
                :
                <h1 className="p">LOADING</h1>
            }
        </>
    );
}