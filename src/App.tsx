import { useState } from 'react'
import './App.css'


function App() {
  return (
    <div className="grid grid-cols-3 w-96 h-96 gap-4">
      <button className=''>01</button>
      <div className='bg-blue-400 focus:bg-blue-700'>01</div>
      <div className='bg-blue-700'>02</div>
      <div className='bg-blue-400'>03</div>
      <div className='bg-blue-700'>04</div>
      <div className='bg-blue-400'>05</div>
      <div className='bg-blue-700'>06</div>
      <div className='bg-blue-400'>07</div>
      <div className='bg-blue-700'>08</div>
      <div className='bg-blue-400'>09</div>
    </div>
  )
}

export default App
