import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'; 


export const ResetPassword = ({handleOnchange,handleOnResetSubmit,formSwitcher, email}) =>{
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Reset Password</h1>
                    <hr/>
                    <form autoComplete='off' onSubmit={handleOnResetSubmit}>
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

                        

                        <Button className="LogbtnSubmit" type="submit" >Reset Password</Button>
                    </form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#!' onClick={()=>formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes ={
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    

};