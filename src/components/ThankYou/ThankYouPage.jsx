import { useHistory } from "react-router-dom"
function ThankYouPage(){

    const history = useHistory();

    const newForm = () => {
        history.push('/');
    }

    return(
       <>
        <h1>Thank you for filling out the feedback!</h1>
        <button onClick={newForm}>New Feedback</button>
        </>
        )

};

export default ThankYouPage;