import React, {useState} from 'react';
import {FormContainer} from "../components";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from  'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const signupHendler = async (e) => {
        e.preventDefault()

        if (password !== cpassword) {
            alert('패스워드 맞지않음')
        }
        console.log({
            username, email, password
        })

        const singInput = {
            name: username,
            email,
            password
        }

        try {
            const {data, status} = await axios.post('http://localhost:8000/api/users/', singInput)
            if (status === 201) {
                navigate('/login')
            }
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <FormContainer>
           <h1>Sign Up</h1>
            <br />
            <Form onSubmit={signupHendler}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter Username'}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Email</Form.Label>
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
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Confirm Password'}
                        value={cpassword}
                        onChange={e => setCpassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type={'submit'} variant={'primary'} className={'btn-block'}>
                    Sign Up
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Signup;