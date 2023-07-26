import React from 'react'

export default function Modal({visible, onClick}) {

  if(!visible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 z-20 flex justify-center items-center text-white'>
      <div onClick={onClick} className='bg-gray-800 rounded-lg p-5'>
        Modal
      </div>
    </div>
  )
}
