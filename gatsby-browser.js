/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// Using this file as like _app.js in Next.js
import React from 'react'
import ModeProvider from 'context/ModeProvider'

export const wrapRootElement = ({ element }) => (
        <ModeProvider>
            {element}
        </ModeProvider>
    )


