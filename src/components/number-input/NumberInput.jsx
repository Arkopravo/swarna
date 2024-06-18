import React, {useState} from 'react'
import "./NumberInput.css"

const NumberInput = () => {

    const [numSets, setNumSets] = useState(0);

    const handleChange = (e) => {
        setNumSets(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Number of sets: ${numSets}`);
    };

    const handlePrev = () => {
        console.log("Prev button clicked");
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="numSets">
                    How many sets you want to create?
                </label>
                <input
                    type="number"
                    id="numSets"
                    name="numSets"
                    value={numSets}
                    onChange={handleChange}
                    min="0"
                    required
                />
                <div className="button-container">
                    <button type="button" onClick={handlePrev}>Prev</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NumberInput
