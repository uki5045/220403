import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Login, Mypage, Signup, Notfound, Products, Users} from "./screens";
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
                      <Route path={'*'} element={<Notfound />} />
                  </Routes>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;