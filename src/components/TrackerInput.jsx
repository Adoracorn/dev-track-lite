import { useState } from "react"

export default function TrackerInput() {
    const [entry, setEntry] = useState("")
    const [entries, setEntries] = useState([ "Ticket 1" ])

    function handleInputChange(event) {
        setEntry(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (entry === "") {
            return;
        }
        setEntries(prevEntries => [...prevEntries, entry])
        setEntry("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={entry}
                    onChange={handleInputChange}
                />
                {entry === "" ? <p>No entry yet</p> : <p>Current entry: {entry}</p>}
                <button>Save Entry</button>
            </form>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index + 1}>{entry}</li>
                ))}
            </ul>
            <button onClick={() => {setEntries([])}}>Clear Entries</button>
        </div>
    )
}