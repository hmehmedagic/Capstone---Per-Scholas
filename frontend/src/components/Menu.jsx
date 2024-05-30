import React from 'react'

const Menu = ({pokemon}) => {
  return (
    <>
      <div className="menus"> {/* menu to display text of pokemon actions */}
        <div className='menu'>
          <div className="inner-menu">
            <div className='dbl-inner-menu'>
              <p>What will</p>
              <p>{pokemon.name.toUpperCase()} do?</p>
            </div>
          </div>
        </div>
        <div className="menu2"> {/* menu to display actions for pokemon */}
          <div className="inner-menu">
            <div className='options'>
              <div><span>&#x25B6;</span>Fight</div>
              <div><span>&#x25B6;</span>Pokemon</div>
            </div>
            <div className='options'>
              <div><span>&#x25B6;</span>Bag</div>  
              <div><span>&#x25B6;</span>Run</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu