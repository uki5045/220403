import React, {useState} from 'react';
import {FormContainer} from "../components";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()
        console.log({
            email, password
        })

        const userInput = {
            email,
            password
        }

        try {
            const {data, status} = await axios.post('http://localhost:8000/api/users/login', userInput)
            if (status === 200) {
                await localStorage.setItem("token", data.token)
                navigate('/mypage')
            }
        } catch (err) {
            console.log(err)
        }


    }

    return (
        <FormContainer>
            <h1>Login</h1>
            <br />
            <Form onSubmit={loginHandler}>
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
                        placeholder={'Enter Password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type={'submit'} variant={'primary'} className={'btn-block'}>
                    Log In
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Login;