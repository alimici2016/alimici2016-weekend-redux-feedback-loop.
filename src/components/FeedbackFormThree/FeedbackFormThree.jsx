import {useState} from 'react'
import {useDispatch} from 'react-redux'

function FeedbackFormThree () {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleInputChange = (event) => {
        // console.log('clicked')
        setInput({
            ...input,
            answer: event.target.value,
        })
    }

    const addInput = () => {
        event.preventDefault();

        dispatch({
            action: "ANSWER_THREE",
            payload: input
        })

        setInput('')
    };

    return(
        <>
        <h1>How well are you being supported?</h1>
        <form onSubmit={(event) => addInput(event)}>
        <input onChange={handleInputChange}
        type="text"
        // value={input}
        placeholder="answer"
        />
        </form>
        </>
    )

};
export default FeedbackFormThree;