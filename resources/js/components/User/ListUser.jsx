import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {requestListUser} from '../../actions/user.actions'
import {Link} from 'react-router-dom'

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.handleRefreshData = this.handleRefreshData.bind(this);
    }
    componentDidMount() {
        this.props.requestListUser();
    }
    listUser() {
        let data = this.props.data.map((user) => {
            return (
                <tr key = {user.id}>
                    <td key = {user.name} >{user.name}</td>
                    <td key = {user.email} >{user.email}</td>
                </tr>
            )
        })
        return data;
    }

    handleRefreshData (e) {
        e.preventDefault();
        this.props.requestListUser();
    }
    render () {
        let obj = this.props.data;
        if (Object.keys(obj).length === 0) {
            return (
                <div>
                    <img className = "padding" src = "./img/loading.gif" />
                </div>
            )
        } else {
        return  (
            
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                {this.listUser()}
                <Link to ='/create-user'>  Create nsew User
                </Link>
                </tbody>
            </table>
        );
    }
    }
}
const mapStateToProps = (state) => ({
    data: state.data
});

const mapDispatchToProps = dispatch => bindActionCreators({requestListUser}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);