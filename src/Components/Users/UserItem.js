import React from 'react';
import './UserItem.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    const { login, avatar_url } = props.users;
    return (
        <div className='user'>
            <img src={avatar_url} alt="Profile" />
            <h2>{login}</h2>
            <Link to={`/user/${login}`}>Profile</Link>
        </div>
    );
};

export default UserItem;
