import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'

function FeedbackForm () {

    // const renderQuestion = () => {
    // }


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
            action: "ANSWER_ONE",
            payload: input
        })

        setInput('')
    };

    // useEffect(()=>{
    //     renderQuestion();
    // }, [])


    return(
    <>
        <h1>How are you feeling today?</h1>

        <form onSubmit={(event) => addInput(event)}>
        <input onChange={handleInputChange}
        type="text"
        value={input}
        placeholder="answer"
        />
        
        </form>

        </>
    )
};

export default FeedbackForm;