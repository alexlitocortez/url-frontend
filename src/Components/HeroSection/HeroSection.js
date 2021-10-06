import React from 'react'
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
            <div className='heroSectionFlex'>
                <div>
                    <div className='heroSection'>
                        <div className='heroHeaderText'>
                            More than just
                        </div>
                        <div className='heroHeaderTextTwo'>
                            shorter links
                            <div className='miniText'>
                                Build your brand's recognition and get detailed<br></br>
                                insights on how your links are performing.
                            </div>
                        </div>
                        <div>
                            <button className='buttonTwo'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className='backgroundImage'>
                </div>
            </div>
        </div>
    )
}


export default HeroSection
