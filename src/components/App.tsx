import * as React from 'react';
import Home  from './Home/home'

import { GlobalStyle } from '../global';
import { LayoutTop } from './LayoutTop/layoutTop';
import { Header } from './Header/header';

function App() {

    return (
        <div>
          <GlobalStyle />
          <LayoutTop>{Header}</LayoutTop>
          <Home play={false} />
        </div>
    );
}

export default App;
