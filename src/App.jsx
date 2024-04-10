import { Link } from "react-router-dom";
import './App.css'

function App() {
    let difficulty = ["easy", "medium", "hard"];
    return (
        <>
            <div className="contain">
                <img src="/logo.png" alt="" />
            </div>
            <div className="container">
                {difficulty.map(d =>
                    // creates three buttons for each difficulty level
                    <Link key={d} to={d}>
                        <button>
                            {d.toUpperCase()}
                        </button>
                    </Link>
                )}
            </div>
        </>
    );
}
export default App
