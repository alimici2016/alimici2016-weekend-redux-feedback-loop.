import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Container, Alert } from "@mui/material";

function ThankYouPage() {

    const history = useHistory();

    const newForm = () => {
        history.push('/');
       
    }

    return (
        <>
            <Container>
                <Paper>
                <Alert severity="success">Thank you for filling out the feedback!</Alert>
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