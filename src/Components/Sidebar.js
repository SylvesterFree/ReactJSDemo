import React from 'react'

const Sidebar = () => {
  return (
    <div  style={{width: '80px'}}>
        <div className='h-100 bg-primary py-4 px-1'>
            <nav className='nav flex-column'>
                <a className='nav-link' style={{color:'white'}} href='#'>link1</a>
                <a className='nav-link' style={{color:'white'}} href='#'>link2</a>
                <a className='nav-link' style={{color:'white'}} href='#'>link3</a>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar