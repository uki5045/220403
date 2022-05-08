import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {
    Home,
    Login,
    Mypage,
    Signup,
    Notfound,
    Products,
    Users,
    UserDetail,
    ProductDetail,
    RegisterProduct
} from "./screens";
import {Footer, Header} from "./components";
import {Container} from "react-bootstrap";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className={'py-3'}>
                <Container>
                  <Routes>
                      <Route path={'/'} element={<Home />} />
                      <Route path={'/login'} element={<Login />} />
                      <Route path={'/signup'} element={<Signup />} />
                      <Route path={'/mypage'} element={<Mypage />} />
                      <Route path={'/products'} element={<Products />} />
                      <Route path={'/users'} element={<Users />} />
                      <Route path={'/users/:userId'} element={<UserDetail />} />
                      <Route path={'/products/:productId'} element={<ProductDetail />} />
                      <Route path={'/products/register'} element={<RegisterProduct />} />
                      <Route path={'/products/page/:pagenumber'} element={<Products />}/>
                      <Route path={'*'} element={<Notfound />} />
                  </Routes>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;