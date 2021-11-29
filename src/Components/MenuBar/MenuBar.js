import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { NavData } from '/Users/l/url-frontend/src/Components/data/NavData.js';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './MenuBar.css';


const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 95vw;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    background-color: #3b3054;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({open}) => (open ? `1` : `0` )};
    top: ${({open}) => (open ? '0' : '-100%' )};
`;


const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const DropdownDashboard = ({open, toggle}) => {

    return (
        <div>
            <DropdownContainer>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Features</li>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>Resources</li>
                </ul>
                <hr></hr>
                <button className='login-button'>Login</button>
                <button className='signup-button'>Sign Up</button>
            </DropdownContainer>
        </div>
    )
}

export default DropdownDashboard    