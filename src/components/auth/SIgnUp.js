import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class SignUp extends React.Component {
    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });
    };
    render() {
        const { handleSubmit } = this.props;
        return (
            <Row>
            <Col lg="3"></Col>
            <Col lg="auto">
            <Jumbotron>
            <Form onSubmit={handleSubmit(this.onSubmit)}>
            <FormGroup>
                <Label>User Name</Label>
                <Input
                    tag={Field}
                    name='username'
                    type='text'
                    component='input'
                    autoComplete='none'
                />
            </FormGroup>
            <FormGroup>
                    <Label>Email</Label>
                    <Input
                        tag={Field}
                        name='email'
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
               

                <div>{this.props.errorMessage}</div>
                <Button color="primary">Sign Up</Button>
            </Form>
            </Jumbotron>
          </Col>
          <Col lg="3"></Col>
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
    reduxForm({ form: 'signup' })
)(SignUp);
