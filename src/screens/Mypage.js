import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormContainer, Loading} from "../components";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {updateProfile, getUserProfile} from "../action/userActions";
import {Message} from "../components";

const Mypage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const GetProfile = useSelector(state => state.GetProfile)
    const {loading, user, error} = GetProfile

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const profileUpdateHandler = async (e) => {
        e.preventDefault()
        dispatch(updateProfile(name, email, password))

    }


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success) {
                dispatch(getUserProfile())
            } else {
                setName(user.name)
                setEmail(user.email)
                setPassword(user.password)
            }
        }
    }, [userInfo, dispatch, navigate, user, success])



    return (
        <FormContainer>
            <h1>Welcome to {name}</h1>
            {success && <Message>profile update</Message>}
            {/*{loading && <Loading />}*/}
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
                        value={password || ''}
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