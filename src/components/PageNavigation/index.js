import React from 'react'
import { Link } from 'gatsby'
// Icons
import LeftIcon from 'images/arrow-left.svg'
import RightIcon from 'images/arrow-right.svg'
// Styles

const PageNavigation = ({ currentPage, numPages }) => {
    return (
        <div>
            <div>
                {currentPage>1 && (
                    // Checking to see if the user is on the 2nd page, so the user would be routed appropriately
                    //- to `/` rather than `/1`, which is an invalid route
                    <Link to={`/${currentPage===2 ? "": currentPage-1}`}>
                        <input type="input" alt="left-nav" src={LeftIcon} />
                    </Link>
                )}
                {
                    <div>
                        <p>
                            {currentPage}/{numPages}
                        </p>
                    </div>
                }
                {currentPage !== numPages && (
                    // Checking to see if the user is on the 2nd page, so the user would be routed appropriately
                    //- to `/` rather than `/1`, which is an invalid route
                    <Link to={`/${currentPage + 1}`}>
                        <input type="input" alt="rightt-nav" src={RightIcon} />
                    </Link>
                )}
            </div>   
        </div>
    )
}

export default PageNavigation
