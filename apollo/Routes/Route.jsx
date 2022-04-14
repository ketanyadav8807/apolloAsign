import React from 'react'
import { Routes } from 'react-router-dom'
import { Appointment } from '../src/components/Appointment'
import { Home } from '../src/components/Home'

export const Route = () => {
  return (
    <div>
        <Routes>
            <Route to="/" elements={<Home />}/>
            <Route to="/appointment" elements={<Appointment />} />
        </Routes>
    </div>
  )
}
