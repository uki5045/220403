import React, {useEffect} from 'react';
import {Card, Container, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {listProduct} from '../action/productActions'
import {Loading, Message, Pagenate} from "../components";
import {LinkContainer} from "react-router-bootstrap";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";


const Products = () => {

    const params = useParams()



    const navigate = useNavigate()

    const dispatch = useDispatch()

    const pageNumber = params.pagenumber || 1

    const userLogin = useSelector((state) => state.userLogin)

    const {userInfo} = userLogin

    const productList = useSelector((state) => state.productList)

    const {loading, products, error, pages, page} = productList

    console.log(products)

    useEffect(() => {
        if (userInfo) {
            dispatch(listProduct(pageNumber))
        }
    }, [dispatch, userInfo, pageNumber])

    const createProductHandler = () => {
        navigate('/products/register')
    }

    return (
        <Container>
            <Row className={'align-items-center'}>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className={'text-right'}>
                    <Button className={'my-4'} onClick={createProductHandler}>
                        <i className={'fas fa-plus'}/> Create Product
                    </Button>

                </Col>
            </Row>
            {loading && <Loading />}
            {error && <Message variant={'danger'}>{error}</Message>}
            <Row>
                {products && products.map(product => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.image} />
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
            <Pagenate pages={pages} page={page} role={'user'} />
        </Container>
    );
};

export default Products;