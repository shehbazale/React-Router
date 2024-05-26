import axios from "axios"
import { useState } from "react"
import { Del, Get, Post, Put } from "../config/apimethods"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function APIHandeling() {

    const [dataList, setDataList] = useState<any>([])

    const navigate = useNavigate()



    const callApi = () => {
        Get('users').then((res) => {
            console.log(res.data)
            setDataList([...res.data])
        })
            .catch((err) => {
                console.log(err)
            })
    }
    const postData = () => {
        Post('posts', {
            userId: 1,
            title: "Something Important",
            body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const editData = () => {
        Put('posts/2', {
            userId: 1,
            id: 2,
            title: "Something Important",
            body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteData = () => {
        Del('posts/2').then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }


    return <>
        <Button sx={{ margin: 2 }} endIcon={<AcUnitIcon />} variant="contained" onClick={callApi}>Call API</Button>
        <Button sx={{ margin: 2 }} variant="contained" onClick={postData}>Post Data</Button>
        <Button sx={{ margin: 2 }} variant="contained" onClick={editData}>Edit Data</Button>
        <Button sx={{ margin: 2 }} variant="contained" onClick={deleteData}>Delete Data</Button>
        <Button sx={{ margin: 2 }} variant="contained"
            onClick={() => {
                navigate('/quizscreen')
            }}
        >Go To Quiz Screen</Button>

        <table className="table">
            <tbody>
                {dataList.map((x: any, i: number) => <tr>
                    <td>{x.name}</td>
                    <td>{x.userName}</td>
                    <td>{x.website}</td>
                    <td>{x.email}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}