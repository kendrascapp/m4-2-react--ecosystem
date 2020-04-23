import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { sellers, items } from '../data';
import Button from './Button';

const ItemDetails = () => {
    const { itemId } = useParams();

    const currentItem = items[itemId];
    const seller = sellers[currentItem.sellerId];

    const itemInStock = currentItem.quantity > 0;

    return (
        <Wrapper>
            <BigPic src={currentItem.imageSrc} />
            <Details>
                <Name>{currentItem.name}</Name>
                <LatinName>{currentItem.latinName}</LatinName>
                <Description>{currentItem.description}</Description>
                <CountryOfOrigin>
                    Product of <strong>{currentItem.countryOfOrigin}</strong>
                </CountryOfOrigin>
                {itemInStock ? (
                    <Button>${currentItem.price} - Buy now</Button>
                ) : (
                        <OutOfStock>Out of Stock</OutOfStock>
                    )}
                <SellerInfo>
                    <SellerImg src={seller.avatarSrc} alt="store owner" />
                    <p>
                        Sold by: {seller.storeName}
                    </p>
                </SellerInfo>
            </Details>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const BigPic = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 14px;
    margin-right: 40px;
`;

const Details = styled.section`
    flex: 1;
`;

const Name = styled.h3`
    font-size: 32px;
    font-weight: 800;
`;

const LatinName = styled.h5`
    font-size: 18px;
    magin-bottom: 30px;
`;

const Description = styled.div`
    font-size: 20px;
    margin-top: 40px;
`;

const CountryOfOrigin = styled.div`
    margin-top: 16px;
    margin-bottom: 40px;
`;

const SellerInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 32px;
    border-radius: 12px;
`;

const SellerImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
`;

const OutOfStock = styled.div`
    padding: 24px;
    margin-top: 10px;
    cursor: not-allowed;
`;

export default ItemDetails;
