import React from 'react';

const Tour = ({
    linkColor,
    title,
    linkDisplay,
    url,
    bg
}) => {

    var linkStyle = {
        color: linkColor,
    };

    return (
        <div id='tour' className='item-cross-section'>
            <div className='info'>
                <p className='subtitle'>{title}</p>
                <a className='tourlink' style={linkStyle} target='_blank' href={url}>{linkDisplay}</a>
            </div>
            <img className='tourbg' src={bg} alt='Tour Flier'/>
        </div>
    )
}

export default Tour;
