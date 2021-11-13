import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImg from '../../images/login.svg';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <Container>
            <Row className="my-4">
                <Col md={6} className="my-auto">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com"  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                        </FloatingLabel>
                        <input type="submit" className="btn btn-dark" value="Login"></input>


                    </form>
                    <Link to="/register" className="text-decoration-none d-block mb-3">Don't Have a Account? Register Here</Link>
                    <button className="btn btn-warning">Login With Google</button>
                </Col>
                <Col md={6} className="d-md-none d-lg-block">
                    <img src={loginImg} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;