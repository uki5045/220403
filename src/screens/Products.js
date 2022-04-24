import React, {useEffect, useState} from 'react';
import {Card, Container, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {listProduct} from '../action/productActions'
import {Loading, Message} from "../components";


const Products = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)

    const {userInfo} = userLogin

    const productList = useSelector((state) => state.productList)

    const {loading, products, error} = productList

    // const [products, setProducts] = useState([])

    const getProducts = () => {
        if (userInfo) {
            dispatch(listProduct())
        }

    }
    //     try {
    //         const {data} = await axios.get('http://localhost:8000/api/products/')
    //         setProducts(data.products)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    useEffect(() => {
        getProducts()
    }, [dispatch, userInfo])

    return (
        <Container>
            {loading && <Loading />}
            {error && <Message variant={'danger'}>{error}</Message>}
            <Row>
                {products && products.map(product => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`http://localhost:8000${product.image}`} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;