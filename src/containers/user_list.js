import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../components/sort';

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortCriteria: 'lastName',
            entriesPerPage: this.props.users.length
        };

        this.sortByLastName = this.sortByLastName.bind(this);
        this.sortByEmail = this.sortByEmail.bind(this);
        this.sortByBirthday = this.sortByBirthday.bind(this);
        this.handlePagingChange = this.handlePagingChange.bind(this);
    }

    sortByLastName() {this.setState({sortCriteria: 'lastName'});}

    sortByEmail() {this.setState({sortCriteria: 'email'});}

    sortByBirthday() {this.setState({sortCriteria: 'birthday'});}

    handlePagingChange(e) {this.setState({entriesPerPage: e.target.value < 1 || '' ? this.props.users.length : e.target.value});}

    render() {
        return (
            <div>
                <span className="link" onClick={this.sortByLastName}>Sort by Last Name </span>
                <span className="link" onClick={this.sortByEmail}>| Sort by Email </span>
                <span className="link" onClick={this.sortByBirthday}>| Sort by Birthday</span>
                <form>
                    <label>Entries per page</label>
                    <input type="number" onChange={this.handlePagingChange} />
                </form>
                <Sort users={this.props.users} sortCriteria={this.state.sortCriteria} entriesPerPage={this.state.entriesPerPage} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);
