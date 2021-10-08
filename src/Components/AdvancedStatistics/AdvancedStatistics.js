import React from 'react'
import './AdvancedStatistics.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function AdvancedStatistics() {
    return (
        <div>
            <div className='header'>
                Advanced Statistics
                <div className='bodyText'>
                    Track how your links are performing across the web with<br></br>
                    our advanced statistics dashboard.
                </div>
            </div>
            <Grid className='boxGrid'>
                <Box className='firstBox'>
                    <div className='circle'>
                        <div className='brandIcon'></div>
                    </div>
                    {/* First box */}
                    <div className='firstBoxHeader'>
                        Brand Recognition
                    </div>

                    <div className='firstBoxText'>
                        Boost your brand recognition with<br></br>
                        each click. Generic links don't mean a<br></br>
                        thing. Branded links help instill<br></br>
                        confidence in your content.
                    </div>
                    <div className='greenlineOne'></div>
                </Box>
                <Box className='secondBox'>
                    <div className='circle'>
                        <div className='detailedRecords'></div>
                    </div>
                    {/* Second box */}
                    <div className='secondBoxHeader'>
                        Detailed Records
                    </div>

                    <div className='secondBoxText'>
                        Gain insights into who is clicking your<br></br>
                        links. Knowing when and where<br></br>
                        people engage with your content<br></br>
                        helps inform better decisions.
                    </div>
                    <div className='greenlineTwo'></div>
                </Box>
                <Box className='thirdBox'>
                    <div className='circle'>
                        <div className='fullyCustomizable'></div>
                    </div>
                    {/* Third box */}
                    <div className='thirdBoxHeader'>
                        Fully Customizable
                    </div>

                    <div className='thirdBoxText'>
                        Improve brand awareness and<br></br>
                        content discoverability through<br></br>
                        customizable links, supercharging<br></br>
                        audience engagement.
                    </div>
                </Box>
            </Grid>
        </div>
    )
}

export default AdvancedStatistics
