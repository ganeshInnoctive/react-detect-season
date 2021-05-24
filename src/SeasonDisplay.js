import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    Summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },

    Winter: {
        text: 'Damn it\'s freezing',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Summer' : 'Winter'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return (

        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon icon-left massive`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon icon-right massive`} />
        </div>
    )
}

export default SeasonDisplay