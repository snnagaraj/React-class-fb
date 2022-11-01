import React, { Component } from 'react'
import './Left.css'

export class Left extends Component {
  render() {
    return (
        <div className='left'>
        <div className='head'>
            <h1>Home</h1>
            <p>create</p>
        </div>
        <li><a href='#'><i class="bi bi-person-circle"></i>Nagarajan</a></li>
        <li><a href='#'><i class="bi bi-person-circle"></i>Friends</a></li>
        <li><a href='#'><i class="bi bi-people-fill"></i>Groups</a></li>
        <li><a href='#'><i class="bi bi-play-btn-fill"></i>Watch</a></li>
        <li><a href='#'><i class="bi bi-save2-fill"></i>saved</a></li>
        <li><a href='#'><i class="bi bi-calendar3-event-fill"></i>Events</a></li>
        <li><a href='#'><i class="bi bi-dice-3-fill"></i>Games</a></li>
        <li><a href='#'><i class="bi bi-question-circle-fill"></i>Help & Support</a></li>
        <li><a href='#'><i class="bi bi-gear-fill"></i>Settings</a></li>
        </div>
    )
  }
}

export default Left