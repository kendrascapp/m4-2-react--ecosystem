import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Home from './Home';
import About from './About';
import GlobalStyles from './GlobalStyles';
import ItemDetails from './ItemDetails';

function App() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Header />
                <Main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/items/:itemId">
                            <ItemDetails />
                        </Route>
                    </Switch>
                </Main>
            </Wrapper>

            <GlobalStyles />
        </BrowserRouter>
    );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default App;
