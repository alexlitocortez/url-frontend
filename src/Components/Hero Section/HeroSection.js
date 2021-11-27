import React from 'react';
import './HeroSection.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';





function HeroSection() {
    return (
        <div>
            <header className='header'>
                <div className='header__content'>
                    <h1 className='header__content__heading'>More than just shorter links</h1>
                    <p className='header__content__info'>
                        Build your own brand's recognition and get detailed
                        insights on how your links are performing
                    </p>
                    <button className='btn'>
                        Get Started
                    </button>
                </div>
                <div className='header__image'></div>
            </header>
        </div>
    )
}


export default HeroSection