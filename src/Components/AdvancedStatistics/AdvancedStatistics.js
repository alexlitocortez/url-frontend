import React from 'react'
import './AdvancedStatistics.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function AdvancedStatistics() {
    return (
        <div>
            <div className='statistics'>
                <header className='statistics__header'>
                    <h3 className='statistics__header__heading'>Advanced Statistics</h3>
                    <p className='statistics__header__info'>
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </header>
                <ul className='statistics__articles'>
                    <li className='statistics__articles_two'>
                        <div className='article__image'>
                            <span className='first__image'></span>
                        </div>
                        <h4 className='statistics__articles__article__header'>Brand Recognition</h4>
                        <p className='statistics__articles__article__info'>
                            Boost your brand recognition with each click. Generic links don't mean a 
                            thing. Branded links help instill confidence in your content.
                        </p>
                    </li>
                    <li className='statistics__articles_two listTwo'>
                        <div className='article__image'>
                            <span className='second__image'></span>
                        </div>
                        <h4 className='statistics__articles__article__header'>Detailed Records</h4>
                        <p className='statistics__articles__article__info'>
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.
                        </p>
                    </li>
                    <li className='statistics__articles_two listThree'>
                        <div className='article__image'>
                            <span className='third__image'></span>
                        </div>
                        <h4 className='statistics__articles__article__header'>Fully Customizable</h4>
                        <p className='statistics__articles__article__info'>
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdvancedStatistics
