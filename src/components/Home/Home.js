import React, { Component } from 'react'
import "./home.css"
import HomeTop from '../HomeTop/HomeTop.js'
import HomeMid from '../HomeMid/HomeMid.js'

export class Home extends Component {
  render() {
    return (
        <div className = 'home-container'>
          <HomeTop />
        </div>
    )
  }
}

export default Home