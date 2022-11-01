import React, { Component } from 'react'
import './Right.css'

export class Right extends Component {
  render() {
    return (
        <div className='right'>
        <div className='easy'>
          <h3>Friend Request</h3>
          <p>see all</p>
        </div>
        <div className='box'>
          <div className='box-image'>
            <img src='https://i.pinimg.com/originals/3d/57/ae/3d57aef0470226a31c0f1eac677bb5ee.jpg'></img>
          </div>
          <div className='box-text'>
            <h2>Arjun</h2>
            <p><i class="bi bi-people-fill"></i>89k mutual friends</p>
            <div className='btn'>
              <button type='button'>Accept</button>
              <button type='button'>Cancel</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='box-image'>
            <img src='https://static.toiimg.com/photo/msid-70514440/70514440.jpg?59357'></img>
          </div>
          <div className='box-text'>
            <h2>Vishal</h2>
            <p><i class="bi bi-people-fill"></i>30k mutual friends</p>
            <div className='btn'>
              <button type='button'>Accept</button>
              <button type='button'>Cancel</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='box-image'>
            <img src='http://biggbosstamil.in/wp-content/uploads/2021/05/151213132_145457807325284_781826109033059230_n-819x1024.jpg'></img>
          </div>
          <div className='box-text'>
            <h2>Pugal</h2>
            <p><i class="bi bi-people-fill"></i>12k mutual friends</p>
            <div className='btn'>
              <button type='button'>Accept</button>
              <button type='button'>Cancel</button>
            </div>
          </div>
        </div>
        <div className='contact'>
           <h2>Contacts</h2>
        </div>
        <div className='best'>
          <img src='https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/30/file7avq8bmt4apctmaack-1593530371.jpg'></img>
          <h3>Madan Gowri</h3>
        </div>
        <div className='best'>
          <img src='https://nettv4u.com/serialimages/25-02-2020/shivangi.jpg'></img>
          <h3>Sivangii</h3>
        </div>
        <div className='best'>
          <img src='https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg'></img>
          <h3>Sundhar</h3>
        </div>
        <div className='best'>
          <img src='https://images.hindustantimes.com/img/2022/10/16/550x309/AP10-14-2022-000002B-0_1665910603508_1665910603508_1665910636418_1665910636418.jpg'></img>
          <h3>Ronalto</h3>
        </div>
      </div>
    )
  }
}

export default Right