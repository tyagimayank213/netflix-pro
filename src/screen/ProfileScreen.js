import { auth } from '../firebase'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css'
import PlanScreen from './PlanScreen'

function ProfileScreen() {
const user = useSelector(selectUser)

    return (
        <div className="profileScreen ">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                 <div className="profileScreen__info">
                     <img
                      src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
                      alt="" />
                      <div className="profileScreen__details">
                          <h2>{user.email}</h2>
                          <div className="profileScreen__plans">
                              <h2>Plans</h2>
                              <PlanScreen />
                              <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">Sign Out</button>
                          </div>
                      </div>
                 </div>

            </div>
        </div>

    )
}

export default ProfileScreen
