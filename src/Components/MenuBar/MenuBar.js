import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { NavData } from '/Users/l/url-frontend/src/Components/data/NavData.js';
import { bool } from 'prop-types';
import './MenuBar.css';


const DropdownContainer = styled.nav`
    display: none;

    @media screen and (max-width: 760px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 999;
        width: 100vw;
        height: 80vh;
        text-align: left;
        position: absolute;
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;
        background-color: #3b3054;
        top: 0;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.3s ease-in-out;
    }
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
`;

const DropdownDashboard = ({ open, setOpen }) => {

    return (
        <div>
            <DropdownContainer open={open}>
                <CloseIcon open={open} onClick={() => setOpen(!open)} />
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

DropdownDashboard.propTypes = {
    open: bool.isRequired,
}

export default DropdownDashboard  

