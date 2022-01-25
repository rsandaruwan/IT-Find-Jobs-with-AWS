import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'; 


export const LoginForm = ({handleOnchange,handleOnSubmit,formSwitcher, email, pass}) =>{
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Client Login</h1>
                    <hr/>
                    <form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleOnchange}
                                placeholder='Enter Email'
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                value={pass}
                                onChange={handleOnchange}
                                placeholder='Enter Password'
                                required
                            />
                        </Form.Group>

                        <Button className="LogbtnSubmit" type="submit" >Login</Button>
                    </form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#!' onClick={()=>formSwitcher('reset')}>Forget Password</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes ={
    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired

};