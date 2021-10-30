import { useState } from 'react'
import { useDispatch } from 'react-redux'

function FeedbackFormFour() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    // const handleInputChange = (event) => {
    //     // console.log('clicked')
    //     setInput({
    //         ...input,
    //         answer: event.target.value,
    //     })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ANSWER_FOUR",
            payload: input.answer
        })

        setInput('')
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>

            <form>
                <input onChange={(event) => setInput(event.target.value)}
                    type="text"
                    value={input.answer}
                    placeholder="answer"
                />
            </form>
            <button onClick={handleSubmit}>NEXT
            </button>
        </>
    )
}

export default FeedbackFormFour;