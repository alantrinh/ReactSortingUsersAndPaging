import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {currentPage: 1};

        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    createListItem() {
        const sliceStart = (this.state.currentPage - 1) * this.props.entriesPerPage;
        const sliceEnd = (this.state.currentPage - 1) * this.props.entriesPerPage + Number(this.props.entriesPerPage);
        const currentPageUsers = this.props.sortedUsers.slice(sliceStart, sliceEnd);
        
        return currentPageUsers.map(user => {
            return (
                <li
                    key={user.email}>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <div>Email: {user.email}</div>
                    <div>Birthday: {user.birthday}</div>
                </li>
            );
        });
    }

    setCurrentPage(page) {
        this.setState({currentPage: page});
    }

    createPages(pages) {
        const pageArray = [];
        for (let i = 0; i < pages; i ++) {
            pageArray.push(i + 1);
        }
        return (
            pageArray.map(page => {
                return (<span className="link" key={page} onClick={() => this.setCurrentPage(page)}>{page} </span>);
            })
        );
    }

    render() {
        let pages;
        if (this.props.entriesPerPage < 1) {
            pages = 1;
        } else {
            pages = Math.ceil(pages = this.props.sortedUsers.length/this.props.entriesPerPage);
        }

        return (
            <div>
                <ul>
                    {this.createListItem()}
                </ul>
                Page: {this.createPages(pages)}
            </div>

        );
    }
}
