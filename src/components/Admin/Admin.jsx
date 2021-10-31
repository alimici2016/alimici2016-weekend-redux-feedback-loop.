import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {

    const [data, setData] = useState({})


    const fetchData = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log(response.data)
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    // const dataMap = () => {data.map((data, index) => 
    //     <li key={index}>{data} </li>
    //     )}

    useEffect(() => {
        fetchData();
    }, [])

    return (
            <h2>Inputs</h2>
           
    );


}

export default Admin;