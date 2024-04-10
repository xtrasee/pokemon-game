import { useState, useEffect } from "react";

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
        return (() => {
            setPokemonList([]);
            setError(null);
            setLoading(false);
        })
        // idList specifies when effect should be rerun aka when 'idList' changes
    }, [idList]);
}