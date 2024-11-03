import React from 'react'
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

function Dad() {
  return (
    <div className='border-2 border-green-700 m-2'>
        <h1 className='text-center'>Dad</h1>
        <div className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
        </div>
    </div>
  )
}

export default Dad