

import React, { Fragment } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import axios from 'axios';
import Search from './Components/Users/Search';
import Alert from './Components/Layout/Alert';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';

class App extends React.Component {
  state = {
    users: [],
    user: {}, // corrected from [] to {}
    loading: false,
    alert: null,
  };

  searchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ user: res.data, loading: false });
  };

  clearUsersHandler = () => {
    this.setState({ users: [] });
  };

  alertHandler = (msg, style) => {
    this.setState({ alert: { msg: msg, style: style } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };

  render() {
    const { users, user, loading, alert } = this.state;
    return (
      <Router>
        <>
          <Navbar />
          <br />
          
          <div className='container'>
            <Alert alert={alert} />
            <Routes>
              <Route
                path='/'
                element={
                  <Fragment>
                    <Search
                      onSearchUsers={this.searchTextHandler}
                      onClearUsers={this.clearUsersHandler}
                      showUsers={users.length > 0}
                      onAlert={this.alertHandler}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:login'
                element={
                  <User getUser={this.getUser} user={user} loading={loading} />
                }
              />
            </Routes>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
