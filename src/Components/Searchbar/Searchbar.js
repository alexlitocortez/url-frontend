import React from 'react'
import './Searchbar.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


function Searchbar() {
    return (
        <div>
            <div className='shorten_wrapper'>
                <div className='shortener'>
                    <div className='shortener__input-wrapper'>
                        <input type='text' placeholder='Shorten a link here...' className='shortener_input'></input>
                    </div>
                    <button className='btn shortener-button'>
                        Shorten it!
                    </button>
                    <div className='backgroundImage'></div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

