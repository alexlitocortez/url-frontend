import React from 'react'
import './Searchbar.css';

function Searchbar() {
    function UrlChecker() {

        var errorPlace = document.getElementById('spanError');
        var spanError = document.createElement('span');
        var linkDiv = document.getElementById('linkDiv')
        var node = document.createElement('li');
        var buttonCopy = document.createElement('button');
        var noLink = document.getElementById('http');
        let input = document.getElementById('link-input');

        node.id = 'node';

        spanError.innerHTML = 'Please add a link';
        spanError.style['color']='#f46262';

        buttonCopy.innerHTML = 'Copy';
        buttonCopy.id = 'buttonCopy';

        node.style['height'] = '5rem';
        node.style['backgroundColor'] = 'white';
        node.style['marginBottom'] = '1rem';

        if (input.attr('placeholder').indexOf('http')) {
            linkDiv.appendChild(node);
            node.appendChild(buttonCopy);
        } else {
            input.classList.add('input-error');
            errorPlace.appendChild(spanError);
        }
    }

    return (
        <div>
            <div className='shorten_wrapper'>
                <div className='shortener'>
                    <div className='shortener__input-wrapper'>
                        <input type='text' placeholder='Shorten a link here...' className='shortener_input' id='link-input'></input>
                    </div>
                    <button className='btn shortener-button' onClick={UrlChecker}>
                        Shorten it!
                    </button>
                    <div className='backgroundImage'></div>
                    <div id='spanError'>

                    </div>
                </div>
                <div>
                    <ul id='linkDiv'>
                        <button></button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

