import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../action/userActions";
import {Loading, Message} from "../components";

const Users = () => {

    const dispatch = useDispatch()

    // const [users, setUsers] = useState([])

    const userLogin = useSelector((state) => state.userLogin)

    const {userInfo} = userLogin

    const userList = useSelector((state) => state.userList)

    const {loading, users, error} = userList

    const fetchUsers = async () => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(getUsers())
        }


        // try {
        //
        //     const token = localStorage.getItem('token')
        //
        //     const config = {
        //         headers: {
        //             "Authorization": "Bearer " + token
        //         }
        //     }
        //
        //     const {data, status} = await axios.get('http://localhost:8000/api/users', config)
        //     if (status === 200) {
        //       setUsers(data)
        //     }
        //
        // } catch (err) {
        //     console.log(err)
        // }
    }



    useEffect(() => {
        fetchUsers()
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
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isAdmin ? "관리자" : '유저'}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;