import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormContainer} from "../components";
import {Button, Form} from "react-bootstrap";

const Mypage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setEmail(userInfo.email)
            setPassword(userInfo.password)
        }
    }, [userInfo])

    // const getProfile = async () => {
    //     try {
    //
    //         const token = localStorage.getItem("token")
    //
    //         const config = {
    //             headers: {
    //                 "Authorization" : "Bearer " + token
    //             }
    //         }
    //
    //         const {data, status} = await axios.get('http://localhost:8000/api/users/profile', config)
    //         if (status === 200) {
    //             setName(data.name)
    //             setEmail(data.email)
    //
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const profileUpdateHandler = async (e) => {
        e.preventDefault()
    //
    //     try {
    //
    //         const userInput = {
    //             name, email, password
    //         }
    //
    //         const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    //
    //         const config = {
    //             headers: {
    //                 "Authorization" : "Bearer " + userInfo.token
    //             }
    //         }
    //
    //         const {data, status} = await axios.put('http://localhost:8000/api/users/profile', userInput, config)
    //         if (status === 200) {
    //             alert('updated')
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    }
    //
    // useEffect(() => {
    //     getProfile()
    // }, [])



    return (
        <FormContainer>
            <h1>Welcome to {name}</h1>
            <br />
            <Form onSubmit={profileUpdateHandler}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type={'name'}
                        placeholder={'Enter Username'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'Enter Email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type={'submit'} variant={'primary'} className={'btn-block'}>
                    Update
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Mypage;