import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@restart/ui/esm/Button";

function Admin() {

    const [data, setData] = useState([])


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
    //End Get route

    const deleteData = (id) => {
        confirm('Do you want to delete?')
    //    console.log(id)
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        }).then((response) => {
            fetchData();
            console.log(response)
        }).catch((err) =>{
            console.log('err in DELETE', err)
        })

    };
    //Delete route which is taking id in as a parameter

    const alertDelete = () => {
        alert('are you sure you want to delete')
    }

    useEffect(() => {
        fetchData();
    }, []);
    // rendering the data

    return (
        <>
            <TableContainer component={Paper}>
                <h2>Inputs</h2>
                <Table className="dataTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling:</TableCell>
                            <TableCell>Understanding:</TableCell>
                            <TableCell>Support:</TableCell>
                            <TableCell>Comments:</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell>{data.feeling}</TableCell>
                                <TableCell>{data.understanding}</TableCell>
                                <TableCell>{data.support}</TableCell>
                                <TableCell>{data.comments}</TableCell>
                                <TableCell><Button onClick={ () => deleteData(data.id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Admin;