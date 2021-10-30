import { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function FeedbackForm() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('clicked')
        // setInput({
        //     ...input,
        //     answer: event.target.value,
        // })

        dispatch({
           type: "ANSWER_ONE",
            payload: input
        })

        setInput('')
    };

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form>
                <input onChange={(event) => setInput(event.target.value)}
                    type="text"
                    value={input}
                    placeholder="answer"
                />
            </form>
            <button onClick={handleSubmit}>
              <Link to="/two">NEXT</Link>
            </button>
        </>
    )
};

export default FeedbackForm;