import { Link } from "react-router-dom";
import { useState } from "react";
import Instructions from "./components/Instructions";
import './App.css'

function App() {
    let difficulty = ["easy", "medium", "hard"];
    const [isPopUpOpen, setPopUpOpen] = useState(false);
    
    const handleOpen = () => {
        setPopUpOpen(true);
    }

    const handleClosed = () => {
        setPopUpOpen(false);
    }
    
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
                <button onClick={handleOpen} className="instructionsBtn">HOW TO PLAY</button>
                <Instructions isOpen={isPopUpOpen} isClosed={handleClosed}/>
            </div>
        </>
    );
}
export default App
