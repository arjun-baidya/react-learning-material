import React from 'react'
import { Button, FullDiv, H1, P } from '../styles/Styled.test'

function Test() {
    return (
        // here import FullDiv from styles/Styled.test.js
        <FullDiv>
            {/* impot H1 component or tag  */}
            <H1>This is styled component section</H1>
            <P>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, quisquam.
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, quisquam.
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, quisquam.
            </P>
            <div>
                <Button>Click me</Button>
            </div>
        </FullDiv>
    )
}

export default Test

// here all tags and components are imported from styles/Styled.test.js
// and then we can use them in our components these are styled components and our custom design