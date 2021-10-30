import { useSelector } from "react-redux";
import axios from 'axios'
function SubmitPage() {

    // const feeling = useSelector((store) => store.answerReducer)
    // const understanding = useSelector((store) => store.answerTwoReducer)
    // const support = useSelector((store) => store.answerThreeReducer)
    // const comments = useSelector((store) => store.answerFourReducer)

    const feedback = useSelector((store) => store.feedbackReducer)


    const handleSubmit = () => {
        console.log('clicked')
        axios({
            method: 'POST',
            url: '/', 
            data: feedback
        }).then ((response) => {
            console.log('response from POST', response)
        }).catch((err) => {
            console.log('error in POST', err)
        })
    };

    console.log(feedback.feelings);
    return(
        <>
        <p>{feedback.feelings}</p>
        {/* <p>{answerArray.understanding}</p>
        <p>{answerArray.support}</p>
        <p>{answerArray.comments}</p> */}
        <button onClick={handleSubmit}> Submit</button>
        </>
    )

};

export default SubmitPage;