import React from 'react'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    playerImage: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        height: '600px',
        width: '600px'
    }
}))


var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';



function LinkShortener() {

    var iDiv = document.createElement('div');
    iDiv.id = 'block';
    iDiv.className = 'block';

    const classes = useStyles()

    return (
        <div>
            
        </div>
    )
}

export default LinkShortener
