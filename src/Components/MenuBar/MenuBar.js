import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { NavData } from '/Users/l/url-frontend/src/Components/data/NavData.js';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #696969;
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
        <DropdownContainer>
            <Icon onClick={toggle} >
                <CloseIcon onClick={toggle} />
            </Icon>

            <Grid>

                <Grid item xs={6}>
                {NavData.map((item, index) => (
                    <Typography style={{ padding: '20px' }} tp={item.link} key={index}>
                        {item.title}
                    </Typography>
                ))}
                </Grid>
            </Grid>
        </DropdownContainer>
    )
}

export default DropdownDashboard    