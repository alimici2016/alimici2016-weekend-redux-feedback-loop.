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
        <h2>Review Your Feedback</h2>
        <h5>Feeling: {feedback.feelings}</h5>
       <h5>Understanding: {feedback.understanding}</h5>
       <h5>Support: {feedback.support}</h5>
       <h5>Comments: {feedback.comments}</h5>
        <button onClick={handleSubmit}> Submit</button>
        </>
    )

};

export default SubmitPage;