import React, {useEffect} from 'react';
import {Card, Container, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {listProduct} from '../action/productActions'
import {Loading, Message} from "../components";
import {LinkContainer} from "react-router-bootstrap";


const Products = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)

    const {userInfo} = userLogin

    const productList = useSelector((state) => state.productList)

    const {loading, products, error} = productList

    useEffect(() => {
        if (userInfo) {
            dispatch(listProduct())
        }
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
                                <LinkContainer to={`/products/${product._id}`}>
                                <Button variant="primary">자세히 보기</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;