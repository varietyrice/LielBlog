import React from 'react'
// Styles
import {HamburgerIcon} from './Hamburger.styles'

const Hamburger = ({menuOpen, setMenuOpen}) => 
        <HamburgerIcon 
        role="button" 
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
        >
            {/* Inline => fn() is used here to pass in some props & prevent the setMenuOpen getting- 
            -triggered instantly || setter fn() setMenuOpen() has access to previous state, which is-
            -toggled here */}
            <div />
        </HamburgerIcon>
    
export default Hamburger
