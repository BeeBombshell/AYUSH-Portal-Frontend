import React, { Component } from 'react';
import './signUp.css';
import axios from 'axios';

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      roles: '',
      country: '',
    };
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJiaGF2eWEiLCJpYXQiOjE2NTUyNzc5MDUsImV4cCI6MTgxMjk1NzkwNX0.8PVPMkVNIU1vpCu6pX-XEj6ROPLVCQJU7GjesjPFEAY';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  //   insertData(nonce){
  //     axios.get('http://wp.ruvictor.com/api/user/register/?username='+this.state.username+'&email='+this.state.email+'&nonce=' + nonce + '&display_name='+this.state.display_name+'&insecure=cool')
  //     .then(res => {
  //       ///const data = res.data;
  //       ///console.log(data);
  //     }).catch(error => {
  //       console.log(error.response)
  //   });
  //   }

  //   getWPnonce(){
  //     axios.get('http://wp.ruvictor.com/api/get_nonce/?controller=user&method=register')
  //     .then(res => {
  //       this.insertData(res.data.nonce);
  //       ///console.log(res.data.nonce);
  //     }).catch(error => {
  //       console.log(error.response)
  //   });
  //   }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // this.getWPnonce();
    axios.post('http://localhost/network/wp-json/wp/v2/users', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      roles: this.state.roles,
    }, {
      auth: {
        username: 'admin',
        password: 'admin@123'
      },
      headers: {
        // 'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        // 'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
      }
    })
      .then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error.response)
      });
  }

  render() {
    return (
      <div className='container'>
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label className='labelForm' htmlFor="exampleInputUsername">Username</label>
            <input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Enter Username" />
          </div>

          <div className="form-group">
            <label className='labelForm' htmlFor="exampleInputEmail">Email address</label>
            <input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email" />
          </div>

          <div className="form-group">
            <label className='labelForm' htmlFor="exampleInputPassword">Password</label>
            <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" />
          </div>

          <div className='form-group'>
            <label className='labelForm' htmlFor="exampleInputRoles">Select Roles</label>
            <select className="form-control" onChange={(e) => { this.setState({ roles: e.target.value }) }} placeholder="Select Role" id="exampleInputRoles">
              <option>Select Roles</option>
              <option>administrator</option>
              <option>author</option>
              <option>contributor</option>
              <option>editor</option>
              <option>subscriber</option>
            </select>
          </div>

          {/* <div className='formGroup'>
            <label htmlFor="exampleInputCountry">Select Country</label>
            <select className="selectpicker countrypicker" data-flag="true" onChange={(e) => { this.setState({ country: e.target.value }) }} placeholder="Select Country" id="exampleInputCountry">
            </select>
          </div> */}

          {/* <div className="form-group">
            <label htmlFor="exampleInputRoles">Roles</label>
            <input name="roles" value={this.state.roles} onChange={this.handleChange} type="text" className="form-control" id="exampleInputRoles" placeholder="Enter Role" />
          </div> */}

          <div className="form-group">
            <label className='labelForm' htmlFor="exampleInputCountry">Country</label>
            <input name="country" value={this.state.country} onChange={this.handleChange} type="text" className="form-control" id="exampleInputCountry" placeholder="Enter Country" />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>

        </form>
        </div>
      </div>
    );
  }
}

export default SignUp;