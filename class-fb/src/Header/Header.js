import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <div className='header'>
        <div className='header-left'>
           <h1>Facebook</h1>
        </div>
        <div className='header-middle'>
            <div className='search'>
              <input placeholder='search'></input>
            </div>
        </div>
        <div className='header-right'>
             <li><i class="bi bi-chat-fill"></i></li>
             <li><i class="bi bi-bell-fill"></i></li>
             <li><i class="bi bi-person-fill"></i></li>
        </div>
    </div>
    )
  }
}
