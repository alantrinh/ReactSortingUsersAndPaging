import React from 'react';
import Display from './display';

export default function(props) {
    const sortedUsers = props.users;
    sortedUsers.sort((a, b) => {
        return (a[props.sortCriteria] > b[props.sortCriteria]) ? 1 : ((b[props.sortCriteria] > a[props.sortCriteria]) ? -1 : 0);
    });
    return (
        <div>
            <Display sortedUsers={sortedUsers} entriesPerPage={props.entriesPerPage} />
        </div>
    );
}
