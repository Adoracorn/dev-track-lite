import { useState } from "react"

export default function TrackerInput() {
    const [entry, setEntry] = useState("")

    function handleInputChange(event) {
        setEntry(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (entry === "") {
            return;
        }
        setEntry("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={entry}
                onChange={handleInputChange}
            />
            {entry === "" ? <p>No entry yet</p> : <p>Current entry: {entry}</p>}
            <button>Save Entry</button>
        </form>
    )
}