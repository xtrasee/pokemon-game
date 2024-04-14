import "../styles/Instructions.css"

export default function Instructions({ isOpen, isClosed }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="pop-up">
            <h1>How To Play: </h1>
            <p>Challenge yourself by avoiding selecting the same Pokemon twice. Best of luck!</p>
            <button onClick={isClosed}>Close</button>
        </div>
    )
}