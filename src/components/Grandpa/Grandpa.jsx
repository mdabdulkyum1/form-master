import React from 'react'
import Dad from '../Dad/Dad'
import Aunty from '../Aunty/Aunty'
import Uncle from '../Uncle/Uncle'

function Grandpa() {
  return (
    <div className='w-2/4 mx-auto my-32 flex flex-col items-center border-2 border-green-700'>
        <div className="">Grandpa <span className='text-orange-500 text-4xl'>Ring</span></div>
       <div className="flex gap-16 border-2 border-green-700">
       <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
       </div>
    </div>
  )
}

export default Grandpa