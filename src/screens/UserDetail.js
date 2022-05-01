import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userById} from "../action/userActions";

const UserDetail = () => {

    const dispatch = useDispatch()

    // const [user, setUser] = useState({})

    const params = useParams()

    const userGetById = useSelector(state => state.userGetById)
    const {loading, user, error} = userGetById

    useEffect(() => {
        dispatch(userById(params.userId))
    }, [dispatch, user])

    return (
        <div>
            <h1>{params.userId}</h1>
            {/*<h1>{user.name}</h1>*/}
            {/*<h1>{user.description}</h1>*/}
        </div>
    );
};

export default UserDetail;