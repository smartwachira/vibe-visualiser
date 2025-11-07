import React, {useState} from "react";// useState - this component needs local state to hold the mood input value
import AfroScene from "./canvas/AfroScene";

/* Declares and exports the App functional component as the module’s default export. */
export default function App() {
    const [mood, setMood] = useState("");

    return (
        <div className ="app">
            <header className="top">
                <h1>Vibe Visualizer - Day 1 (Afro-Futuristic)</h1>
                <p className="subtitle">Type a mood and hit Enter (GPT wiring comes day2)</p>

            </header>

            <main className="stage">
                <div className = "canvas-wrap">
                    <AfroScene seed ={mood || "sunrise rhythm"}/>
                </div>

                <div className = "controls">
                    <input
                        placeholder="Type a mood (e.g., 'joyful dusk')"
                        value={mood}
                        onChange={(e) => setMood(e.target.value)} //Event handler for change events. Takes the event e, reads e.target.value (the current input string), and updates the mood state via setMood.
                        onKeyDown={(e) =>{
                            if (e.key === "Enter"){
                                console.log("mood:", mood)
                            }
                        }}
                        />
                </div>
            </main>
        </div>
    )
}