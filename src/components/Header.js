import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { COLORS } from '../theme';

const Header = () => {
    return (
        <Wrapper>
            <h1>Fruit Emporium</h1>
            <nav>
               <ul>
                    <li>
                        <NavLink exact activeClassName="current" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="current" to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    ul{
        list-style: none;
        display: flex;

        a{
            padding: 0 10px;
        }
        a.current{
            color: ${COLORS.secondary};
        }
    }
`;

export default Header;
