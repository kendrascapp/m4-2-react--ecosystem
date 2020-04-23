import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListingItem from './ListingItem';

const ListingGrid = ({ itemList }) => {
    return (
        <Wrapper>
            {itemList.map(item => (
                <ListingItem key={item.id} item={item} />
            ))}
        </Wrapper>
    );
};

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
            countryOfOrigin: PropTypes.string.isRequired,
            sellerId: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    a{
        flex: 33.33%;
    }
`;

export default ListingGrid;
