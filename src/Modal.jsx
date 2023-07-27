import React from 'react'

export default function Modal({ visible, closeModal }) {

  if (!visible) return null;

  return (
    <div onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-80 z-20 flex justify-center items-center text-white'>
      <div onClick={e => e.stopPropagation()} className='bg-gray-800 rounded-lg p-5 z-10 container mx-auto my-auto w-11/12'>

        {/* Make into it's own component */}
        <div className="pb-5 text-center text-3xl">Leaderboard</div>

        <ol className="grid grid-cols-2 gap-4 list-inside list-decimal">
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-700 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
          <li className="bg-gray-600 p-1 rounded-sm pl-2">name</li>
        </ol>
      </div>
    </div>
  )
}
