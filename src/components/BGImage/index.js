import React from 'react'
// Styles
import { Wrapper, FakeBGImage, Content} from './BGImage.styles'

const BGImage = ({ fluid, title, className, children }) => (
    <Wrapper>
        <FakeBGImage title={title} fluid={fluid} />
        <Content className={className}>{children}</Content>
    </Wrapper>
)
        

export default BGImage
