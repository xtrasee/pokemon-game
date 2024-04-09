export default function Card() {
    getPokemon();
    async function getPokemon(){
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            
            if (!response.ok) {
                throw new Error("Could not fetch resource")
            }

            const data = await response.json();
            const pokeName = data.name;

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                </div>
            )}
        </div>
    );
}