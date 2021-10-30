import { useSelector } from "react-redux";
import axios from 'axios'
function SubmitPage() {

    const feeling = useSelector((store) => store.answerReducer)
    const understanding = useSelector((store) => store.answerTwoReducer)
    const support = useSelector((store) => store.answerThreeReducer)
    const comments = useSelector((store) => store.answerFourReducer)


    

    // const answerArray = [feeling, understanding, support, comments]


    const handleSubmit = () => {
        console.log('clicked')
        axios({
            method: 'POST',
            url: '/', 
            data: feeling
        }).then ((response) => {
            console.log('response from POST', response)
        }).catch((err) => {
            console.log('error in POST', err)
        })
    };



    console.log(feeling.data);
    return(
        <>
        <p>{feeling}</p>
        {/* <p>{answerArray.understanding}</p>
        <p>{answerArray.support}</p>
        <p>{answerArray.comments}</p> */}
        <button onClick={handleSubmit}> Submit</button>
        </>
    )

};

export default SubmitPage;