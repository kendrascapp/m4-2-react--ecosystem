import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

const ListingItem = ({ item }) => {
    return (
        <CardLink to={`/items/${item.id}`}>
            <Wrapper>
                <FruitPic src={item.imageSrc} />
                <Name>{item.name}</Name>
                <LatinName>{item.latinName}</LatinName>
            </Wrapper>
        </CardLink>
    );
};

const CardLink = styled(Link)`
    text-decoration: none;
    background: light-grey;
`;

const Wrapper = styled.div`
    padding: 40px;
    border-radius: 16px;
    text-align: center;
`;

const FruitPic = styled.img`
    border-radius: 12px;
    max-width: 200px;
`;

const Name = styled.h3`
    color: black;
    font-weight: 800;
    font-size: 22px;
    padding-top: 10px;
`;

const LatinName = styled.h4`
    color: grey;
`;

export default ListingItem;
