import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function FeedbackFormFour() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ANSWER_FOUR",
            payload: input
        })

        setInput('')
    };

    return (
        <>
            <h1>Any comments you want to leave?</h1>

            <form>
                <input onChange={(event) => setInput(event.target.value)}
                    type="text"
                    value={input}
                    placeholder="answer"
                />
            </form>
            <button onClick={handleSubmit}>
            <Link to="/submit">NEXT</Link>
            </button>
        </>
    )
}

export default FeedbackFormFour;