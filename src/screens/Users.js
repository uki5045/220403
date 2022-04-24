import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {

            const token = localStorage.getItem('token')

            const config = {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }

            const {data, status} = await axios.get('http://localhost:8000/api/users', config)
            if (status === 200) {
              setUsers(data)
            }

        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Container>
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
                {users.map(user => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isAdmin ? "관리자" : '유저'}</td>
                    </tr>
                ))}
                {/*<tr>*/}
                {/*    <td>1</td>*/}
                {/*    <td>Mark</td>*/}
                {/*    <td>Otto</td>*/}
                {/*    <td>@mdo</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>2</td>*/}
                {/*    <td>Jacob</td>*/}
                {/*    <td>Thornton</td>*/}
                {/*    <td>@fat</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>3</td>*/}
                {/*    <td colSpan={2}>Larry the Bird</td>*/}
                {/*    <td>@twitter</td>*/}
                {/*</tr>*/}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;