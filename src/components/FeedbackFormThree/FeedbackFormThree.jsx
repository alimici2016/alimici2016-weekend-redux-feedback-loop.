import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function FeedbackFormThree() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
           type: "ANSWER_THREE",
            payload: input
        })

        setInput('')
    };

    return (
        <>
            <h1>How well are you being supported?</h1>

            <form>
                <input onChange={(event) => setInput(event.target.value)}
                    type="text"
                    value={input}
                    placeholder="answer"
                />
            </form>
            <button onClick={handleSubmit}>
            <Link to="/four">NEXT</Link>
            </button>
        </>
    )
};
export default FeedbackFormThree;