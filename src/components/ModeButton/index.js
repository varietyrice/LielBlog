import React from 'react'
//Icons
import DayIcon from 'images/daymode.svg'
import NightIcon from 'images/nightmode.svg'
// Styles
import { ImgButton } from './ModeButton.styles'

const ModeButton = ({darkMode, setDarkMode}) => (
        <ImgButton 
            src={darkMode ? NightIcon : DayIcon}
            alt="Mode"
            onClick={() => setDarkMode(prev => !prev)}
        />
    )   

export default ModeButton
