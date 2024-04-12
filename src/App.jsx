import { Link } from "react-router-dom";
import './App.css'

function App() {
    let difficulty = ["easy", "medium", "hard"];
    return (
        <>
            <div className="container">
                <img src="/images/logo.png" alt="hi" />
            </div>
            <div className="difficulty-container">
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
