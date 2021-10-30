import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function FeedbackFormTwo() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleSubmit= (event) => {
        event.preventDefault();
        // console.log('clicked')
        // setInput({
        //     ...input,
        //     answer: event.target.value,
        // })

        dispatch({
            type: "ANSWER_TWO",
            payload: input
        })

        setInput('')
    };
    return (
        <>
            <h1>How well are you understanding the content?</h1>

            <form>
                <input onChange={(event) => setInput(event.target.value)}
                    type="text"
                    value={input}
                    placeholder="answer"
                />
            </form>
            <button onClick={handleSubmit}>
            <Link to="/three">NEXT</Link>
            </button>
        </>
    )
};

export default FeedbackFormTwo;