import React from 'react'
import './Header.css';

function Header(toggle) {
    return (
        <div className='wholeHeaderBar'>
            <div className='headerBar'>
                <div className='logoFont'>
                Shortly
                </div>
                    <div className='firstMargin'>
                        Features
                    </div>
                    <div className='margin'>
                        Pricing
                    </div>
                    <div className='margin'>
                        Resources
                    </div>
            </div>
            <div className='headerTwo'>
                <div className='login'>
                    Login
                </div>
                <div className='button'>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Header


