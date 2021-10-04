import React from 'react'
import styled from 'styled-components'
import './Header.css';

function Header() {
    return (
        <div>
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
                        <div>
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

