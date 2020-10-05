import React from 'react'
import {Link} from 'gatdby'
// Components
// Hooks
// Styles

const Hero = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Title</h2>
                    <Link to="/">
                        <button>
                            click me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
