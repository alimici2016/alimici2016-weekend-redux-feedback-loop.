import {useState} from 'react'
import {useDispatch} from 'react-redux'

function FeedbackFormTwo () {

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
            action: "ANSWER_TWO",
            payload: input
        })

        setInput('')
    };

    return(
        <form onSubmit={(event) => addInput(event)}
        input onChange={handleInputChange}
        type="text"
        value={input}
        placeholder="answer"
        />
    )
};

export default FeedbackFormTwo;