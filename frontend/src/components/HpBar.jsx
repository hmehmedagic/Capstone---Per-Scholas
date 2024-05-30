import React from 'react'

const HpBar = ({hp}) => {
  return (
    <div className='hp-bar'>
        <div className='word'>HP</div>
        <div className="hp-bar-child"> {/* container to hold the hp bar */}
        </div>
    </div>
  )
}

export default HpBar