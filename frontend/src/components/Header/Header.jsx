import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Explore our carefully curated menu filled with flavorful dishes made from fresh, quality ingredients. Whether you're in the mood for comfort food, spicy bites, or something new, we’ve got something to satisfy every taste. Take a look and find your next favorite meal!</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
