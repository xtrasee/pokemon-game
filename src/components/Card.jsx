import "../styles/Card.css"

export default function Card({ pokemon }) {
    return (
        <div className="card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            <div className="p">{pokemon.name}</div>
        </div>
    )
}