import React from 'react'
import Navbar from './Components/Layout/Navbar'
import UserItem from './Components/User/UserItem'
import User from './Components/User/User'
import axios from "axios"


class App extends React.Component{

  state={
    user:[],
    loading:false,
  }
   async componentDidMount(){
    this.state({loading:true});
    const url ='https://api.github.com/users';
    const res = await axios.get(url);
    console.log(res.data);
    this.setState({users:res.data, loading:false})


  }
  render(){
    return(
    <>    
      <Navbar />
      <User users={this.state.users} loading={this.state.loading } />
      </>

    )
  }
}
export default App