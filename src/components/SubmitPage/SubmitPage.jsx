import { useSelector } from "react-redux";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Container  } from "@mui/material";

function SubmitPage() {

    // const feeling = useSelector((store) => store.answerReducer)
    // const understanding = useSelector((store) => store.answerTwoReducer)
    // const support = useSelector((store) => store.answerThreeReducer)
    // const comments = useSelector((store) => store.answerFourReducer)

    const feedback = useSelector((store) => store.feedbackReducer)
    //first I grab whatever is in the store then store (for lack of a better term) it in a variable feedback 
    //I access the properties of the object and display them on the dom via h5's
    //below that onclick fires off a post route to store this information in the database 

    const history = useHistory();

    const handleSubmit = () => {
        // console.log('clicked')
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) => {
            console.log('response from POST', response)
        }).catch((err) => {
            console.log('error in POST', err)
        })
        history.push('/thank')

    };
    //End Post route, sends data to the database
    
    //Below renders the inputs
    return (
        <>
            <Container>
                <Paper>
                    <h1>Review Your Feedback</h1>
                    <h5>Feeling: {feedback.feeling}</h5>
                    <h5>Understanding: {feedback.understanding}</h5>
                    <h5>Support: {feedback.support}</h5>
                    <h5>Comments: {feedback.comments}</h5>

                    <Button
                        size="small"
                        variant="outlined"
                        onClick={handleSubmit}>Submit

                    </Button>
                </Paper>
            </Container>
        </>
    )
};

export default SubmitPage;