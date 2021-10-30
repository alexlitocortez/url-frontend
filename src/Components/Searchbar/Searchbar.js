import React from 'react'
import './Searchbar.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


function Searchbar() {
    return (
        <div>
            <div className='backgroundColor'>
                <div className='inputBackground'>
                    <Container className='inputPlacement'>
                        <input className='searchBar' type='text' placeholder='Shorten a link here...'></input>
                        <button className='buttonInput'>Shorten It!</button>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

