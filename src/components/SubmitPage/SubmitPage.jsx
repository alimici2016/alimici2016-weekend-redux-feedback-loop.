import { useSelector } from "react-redux";
import axios from 'axios'
import { useRouteMatch } from "react-router";
function SubmitPage() {

    const feeling = useSelector((store) => store.answerReducer)
    const understanding = useSelector((store) => store.answerTwoReducer)
    const support = useSelector((store) => store.answerThreeReducer)
    const comments = useSelector((store) => store.answerFourReducer)


    return(
        <>
        <p>{feeling}</p>
        <p>{understanding}</p>
        <p>{support}</p>
        <p>{comments}</p>
        </>
    )
    

}