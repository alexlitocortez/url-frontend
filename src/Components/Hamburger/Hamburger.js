
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        background-image: url(${FaBars});
        height: 30px;
        width: 40px;
        color: grey;
        cursor: pointer;
        position: absolute;
        top: 35px;
        right: 30px;

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;


function Hamburger({toggle}) {
    return (
        <div>
            <MenuBars onClick={toggle} />
        </div>
    )
}

export default Hamburger

