import { useState, } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Container, TextField, createTheme } from "@mui/material";


function FeedbackForm() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ANSWER_ONE",
            payload: input
        })

        setInput('')
        history.push('/two')
    };

    //This handleSubmit function should be set to default if no event happens
    //Then dispatch to the reducer occurs sending the input as the payload

    //Below we have and onChange where we use to store whatever is input(for lack of a better term)
    //Then said input is the value which is sent to the above dispatch
    //Button when click will fire off this entire thing as well as sending us to the next page

    return (
        <>
            <Container>
                <Paper>
                    <h1>How are you feeling today?</h1>
                    <form>
                        <TextField onChange={(event) => setInput(event.target.value)}
                            size="small"
                            id="filled-size-small"
                            defaultValue="Small"
                            variant="filled"
                            type="number"
                            value={input}
                            placeholder="answer"
                            min="1" max="10"
                        />
                    </form>

                    <Button
                        variant="outlined"
                        disabled={input.length < 1}
                        onClick={handleSubmit}>Next
                    </Button>
                </Paper>
            </Container>
        </>
    )
};

export default FeedbackForm;