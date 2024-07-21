import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    onSearchUsers: PropTypes.func.isRequired,
    showUsers: PropTypes.bool.isRequired,
    onClearUsers: PropTypes.func.isRequired,
    onAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text ===''){
      this.props.onAlert('Please Enter the Username')
    }else{
    this.props.onSearchUsers(this.state.text);
    this.setState({ text: '' });
  }
  };

  onChange = (e) => this.setState({ text: e.target.value });

  render() {
    const {onClearUsers,showUsers}=this.props;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" />
        </form>
        {showUsers && (
          <button onClick={onClearUsers}>Clear Users</button>
        )}
      </>
    );
  }
}

export default Search;
