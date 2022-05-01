import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const UserDetail = () => {

    const [user, setUser] = useState({})

    const params = useParams()

    const getUser = async () => {

        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }

        try {
            const {data} = await axios.get(`http://localhost:8000/api/users/${params.userId}`, config)
            setUser(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <h1>{params.userId}</h1>
            <h1>{user.name}</h1>
            <h1>{user.description}</h1>
        </div>
    );
};

export default UserDetail;