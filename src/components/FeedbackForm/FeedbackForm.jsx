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
    //This handleSubmit function should be set to default if no event happens
    //Then dispatch to the reducer occurs sending the input as the payload

    //Below we have and onChange where we use to store whatever is input(for lack of a better term)
    //Then said input is the value which is sent to the above dispatch
    //Button when click will fire off this entire thing as well as sending us to the next page

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