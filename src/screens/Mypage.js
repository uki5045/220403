import React, {useEffect, useState} from 'react';
import axios from "axios";

const Mypage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const getProfile = async () => {
        try {

            const token = localStorage.getItem("token")

            const config = {
                headers: {
                    "Authorization" : "Bearer " + token
                }
            }

            const {data, status} = await axios.get('http://localhost:8000/api/users/profile', config)
            if (status === 200) {
                setName(data.name)
                setEmail(data.email)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <div>
            <h1>Mypage</h1>
            <br />
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    );
};

export default Mypage;