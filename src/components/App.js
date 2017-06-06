import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import PostList from './PostList'
import NewPost from './NewPost'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import axios from 'axios'

class App extends Component {
  // componentWillMount(){
  //   axios.get('http://192.168.1.102:8080/posts')
  //   .then(res => console.log(res))
  // }
  // handleClickGet(){
  //   axios.get('http://192.168.1.102:5000/posts')
  //   .then(res => console.log(res))
  // }
  // handleClickPost(){
  //   axios.post('http://192.168.1.102:5000/post',{
  //     "title":"yes","content":"I am","category":"888888"
  //   }).then()
  // }
  render() {
    // console.log(a);
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={PostList}  />
          <Route path='/post/new' component={NewPost} />
        </div>
      </Router>
    )
  }
}

export default App;
