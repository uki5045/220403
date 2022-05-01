import React, { useEffect } from 'react';
import {Container, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../action/userActions";
import {Loading, Message} from "../components";
import {LinkContainer} from "react-router-bootstrap";

const Users = () => {

    const dispatch = useDispatch()


    const userLogin = useSelector((state) => state.userLogin)

    const {userInfo} = userLogin

    const userList = useSelector((state) => state.userList)

    const {loading, users, error} = userList

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(getUsers())
        }
    }, [dispatch, userInfo])

    return (
        <Container>
            {loading && <Loading />}
            {error && <Message variant={'danger'}>{error}</Message>}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Admin</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map(user => (
                    <LinkContainer to={`/users/${user._id}`}>
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin ? "관리자" : '유저'}</td>
                        </tr>
                    </LinkContainer>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;