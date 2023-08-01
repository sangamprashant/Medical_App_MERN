import React from 'react'

function Hero() {
  return (
    <div className='hero_container'>
      <div className="Hero">
        <form className="col-lg-12 search" >
          <input
            className="form-control me-1 col-lg-12"
            type="search"
            placeholder="Search"
            aria-label="Search"
           
          />
        </form>
      </div>
    </div>
  )
}

export default Hero
