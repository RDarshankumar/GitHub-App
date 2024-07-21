
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import './User.css'; 

const User = ({ getUser, user, loading }) => {
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, [getUser, login]);

  const {
    avatar_url,
    html_url,
    gists_url,
    location,
    blog,
    company,
    bio,
    hireable,
    followers,
    following,
    public_gists,
    public_repos,
    name,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">Back to the Users</Link>
      <div className="card">
        <div className="card-header">
          <img src={avatar_url} alt={name} />
          <h1>{name}</h1>
        </div>
        <div className="card-body">
          <p>{bio}</p>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
          <ul>
            <li>{company && <strong>Company: </strong>}{company}</li>
            <li>{blog && <strong>Website: </strong>}{blog}</li>
            <li>{location && <strong>Location: </strong>}{location}</li>
            <li>{hireable !== null && <strong> Hireable: </strong>}{hireable ? <i className="ri-shield-check-fill" style={{color:"#2CA3E3"}}></i> : <i className="ri-close-circle-fill" style={{color:"#FF3A2D"}}></i>}</li>
          </ul>
        </div>
        <div className="card-footer">
          <div><strong>Followers: </strong>{followers}</div>
          <div><strong>Following: </strong>{following}</div>
          <div><strong>Public Repos: </strong>{public_repos}</div>
          <div><strong>Public Gists: </strong>{public_gists}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
