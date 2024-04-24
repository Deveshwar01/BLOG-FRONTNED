import React from 'react'
import './style.css'
import DeveshProfile from '/images/DeveshProfile.png'
import { NavLink } from 'react-router-dom'

const index = () => {
  return (
    <div>
    <div class="user-info">
        <img src={DeveshProfile}
            alt="user" />
        <p>Deveshwar Zard</p>
    </div>
    <ul class="flex flex-col gap-5">
        <li class="nav-item active">
            <a href="">
                <i class="fa fa-user nav-icon"></i>
                <span class="nav-text">Profile</span>
            </a>
        </li>
        <NavLink to={'/admin/addblog'}>
            <li class="nav-item active">
                <a>
                    <i class="fa fa-user nav-icon"></i>
                    <span class="nav-text">Add Blog</span>
                </a>
            </li>
        </NavLink>
        <NavLink to={'/admin/addpodcast'}>
            <li class="nav-item active">
                <a>
                    <i class="fa fa-user nav-icon"></i>
                    <span class="nav-text">Add Podcast</span>
                </a>
            </li>
        </NavLink>
    </ul>
</div>
  )
}

export default index