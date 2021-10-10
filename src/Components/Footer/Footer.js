import React from 'react'
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function Footer() {
    return (
        <div>
            <Grid className='footerContainer'>
                <Grid item xs={12} sm={4} className='footerOptions'>
                    <Grid className='footerHeader'>
                        <Box>Shortly</Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className='footerOptionHeader'>Features</Box>
                        <Box className='footerOptionText'>
                            Link Shortening
                        </Box>
                        <Box className='footerOptionText'>
                            Branded Links
                        </Box>
                        <Box className='footerOptionText'> 
                            Analytics
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className='footerOptionHeader'>Resources</Box>
                        <Box className='footerOptionText'>
                            Blog
                        </Box>
                        <Box className='footerOptionText'>
                            Developers
                        </Box>
                        <Box className='footerOptionText'>
                            Support
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className='footerOptionHeader'>Company</Box>
                        <Box className='footerOptionText'>
                            About
                        </Box>
                        <Box className='footerOptionText'>
                            Our Team
                        </Box>
                        <Box className='footerOptionText'>
                            Careers
                        </Box>
                        <Box className='footerOptionText'>
                            Contact
                        </Box>
                    </Grid>
                    <Grid className='social-icons'>
                        <Box className='facebook'></Box>
                        <Box className='twitter'></Box>
                        <Box className='pinterest'></Box>
                        <Box className='instagram'></Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
