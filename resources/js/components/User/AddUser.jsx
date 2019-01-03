import React , {Component} from 'react';
import Form from './Form';
import {connect} from 'react-redux'
import {reqCreateUser} from '../../actions/user.actions'

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    
    }
    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();
        const { name, email, password } = this.state;
        const params = {name, email, password};
        this.props.createUser(params, this.props.router)
    }

    render () {
        return(
            <Form
            user = {this.state}
            onChange = {this.onChange}
            onSubmit = {this.onSubmit}
            />
        ); 
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, props) => {
    return {
        createUser: (user, router) => {
            dispatch(reqCreateUser(user, router));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

