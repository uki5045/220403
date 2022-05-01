import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FormContainer, Message} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {registerProduct} from "../action/productActions";

const RegisterProduct = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [count, setCount] = useState(0)
    const [desc, setDesc] = useState('')

    const productRegister = useSelector(state => state.productRegister)
    const {loading, success, error} = productRegister


    const submitHandler = (e) => {
        e.preventDefault()


        const userInput = {
            name,
            price,
            image,
            brand,
            category,
            countInStock: count,
            description: desc
        }

        dispatch(registerProduct(userInput))


    }

    useEffect(() => {
        if (success) {
            navigate('/products')
        }
    }, [dispatch, navigate, success])

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                go back
            </Button>
            {error && <Message>{error}</Message>}
            <FormContainer>
                <h1>Register Product</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId={'name'}>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control
                            type={'name'}
                            placeholder={'Enter name'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId={'price'}>
                        <Form.Label>
                            Price
                        </Form.Label>
                        <Form.Control
                            type={'number'}
                            placeholder={'Enter Price'}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId={'image'}>
                        <Form.Label>
                            Image
                        </Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter Image URL'}
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId={'brand'}>
                        <Form.Label>
                            Brand
                        </Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter Brand'}
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId={'category'}>
                        <Form.Label>
                            Category
                        </Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter category'}
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId={'count'}>
                        <Form.Label>
                            CountInStock
                        </Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter Count In Stock'}
                            value={count}
                            onChange={e => setCount(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId={'count'}>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Enter Description'}
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Button type={'submit'} variant={'primary'} className={'btn-block'}>Register</Button>
                </Form>
            </FormContainer>
            {/*<Link to={'/products'} className={'btn btn-light my-3'}>*/}
            {/*    go back*/}
            {/*</Link>*/}
        </>
    );
};

export default RegisterProduct;