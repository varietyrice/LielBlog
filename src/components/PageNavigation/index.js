import React from 'react'
import { Link } from 'gatsby'
// Icons
import LeftIcon from 'images/arrow-left.svg'
import RightIcon from 'images/arrow-right.svg'
// Styles
import { 
    PageNavigationWrapper,
    ImageWrapper,
    Current
 } from './PageNavigation.styles'

const PageNavigation = ({ currentPage, numPages }) => {
    return (
        <PageNavigationWrapper>
            <ImageWrapper>
                {currentPage>1 && (
                    // Checking to see if the user is on the 2nd page, so the user would be routed appropriately
                    //- to `/` rather than `/1`, which is an invalid route
                    <Link to={`/${currentPage===2 ? "": currentPage-1}`}>
                        <input type="image" alt="left-nav" src={LeftIcon} />
                    </Link>
                )}
            </ImageWrapper>
                <Current>
                    <p>
                        {currentPage}/{numPages}
                    </p>
                </Current>
            <ImageWrapper> 
                {currentPage !== numPages && (
                    // Checking to see if the user is on the 2nd page, so the user would be routed appropriately
                    //- to `/` rather than `/1`, which is an invalid route
                    <Link to={`/${currentPage + 1}`}>
                        <input type="image" alt="rightt-nav" src={RightIcon} />
                    </Link>
                )}
            </ImageWrapper>   
        </PageNavigationWrapper>
    )
}

export default PageNavigation
