import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import { items } from '../data';

function Home(props) {
    return (
        <>
            <Intro>
                <Paragraph>
                    Fruit emporium sells the finest fruits from this world and beyond.
                </Paragraph>
                <Paragraph>
                    <strong>Browse items:</strong>
                </Paragraph>
            </Intro>
            <ListingGrid itemList={Object.values(items)} />
        </>
    );
}

const Intro = styled.div`
    padding-bottom: 24px;
`;

const Paragraph = styled.p`
    font-size: 21px;
    margin-bottom: 40px;
`;

export default Home;
