import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Container } from "@mui/material";

function ThankYouPage() {

    const history = useHistory();

    const newForm = () => {
        history.push('/');
    }

    return (
        <>
            <Container>
                <Paper>
                    <h1>Thank you for filling out the feedback!</h1>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={newForm}>New Feedback
                    </Button>
                </Paper>
            </Container>
        </>
    )

};

export default ThankYouPage;