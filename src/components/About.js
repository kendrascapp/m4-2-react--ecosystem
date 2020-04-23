import React from 'react';
import styled from 'styled-components';

function About(props) {
    return (
        <>
            <Paragraph>
                Fruit emporium is founded on a very simple principle:{' '}
                <strong>Fruit is good.</strong>
            </Paragraph>
            <Paragraph>
                We carry the finest selection of produce from around the world, from
                tart citrus to sweet cherries. Our sellers are world-class, and your
                fruit is guaranteed to be worthy of auction in Asian markets.
            </Paragraph>
        </>
    );
}

const Paragraph = styled.p`
    font-size: 21px;
    margin-bottom: 40px;
`;

export default About;
