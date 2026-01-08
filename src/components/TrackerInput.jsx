import { useState } from "react"

export default function TrackerInput() {
    const [entry, setEntry] = useState("")

    function handleInputChange(event) {
        setEntry(event.target.value)
    }

    return(
        <form>
            <input 
                type="text"
                value={entry}
                onChange={handleInputChange}
            />
            {entry === "" ? <p>No entry yet</p> : <p>Current entry: {entry}</p>}
        </form>
    )
}