import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Container, TextField } from "@mui/material";

function FeedbackFormThree() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ANSWER_THREE",
            payload: input
        })

        setInput('')
        history.push('/four')
    };
    const handleBack = () => {
        history.push('/two')
    };

    return (
        <>
            <Container>
                <Paper>
                    <h1>How well are you being supported?</h1>
                    <form>
                        <TextField onChange={(event) => setInput(event.target.value)}
                            size="small"
                            id="filled-size-small"
                            variant="filled"
                            type="text"
                            value={input}
                            placeholder="answer"
                        />
                    </form>
                    <Button
                    onClick={handleBack}>Back  
                    </Button>

                    <Button
                        variant="outlined"
                        disabled={parseInt(input) < 1 || parseInt(input) > 5 || input == ''}
                        onClick={handleSubmit}>Next
                    </Button>
                </Paper>
            </Container>
        </>
    )
};
export default FeedbackFormThree;