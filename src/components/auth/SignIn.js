import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron  } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Signin extends React.Component {

    
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/');
        });
    };
    render() {
        const { handleSubmit } = this.props;
        return (
            <Row>
          <Col lg="2"></Col>
          <Col lg="8">
          <Jumbotron>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        tag={Field}
                        name='username'
                        type='text'
                        component='input'
                        autoComplete='none'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        tag={Field}
                        name='password'
                        type='password'
                        component='input'
                        autoComplete='none'
                    />
                </FormGroup>
                <div color="danger">{this.props.errorMessage}</div>
                <Button color="primary">Sign In</Button>
            </Form>
          </Jumbotron>
          </Col>
          <Col lg="2"></Col>
        </Row>




            
        );
    }
}
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
};
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);
