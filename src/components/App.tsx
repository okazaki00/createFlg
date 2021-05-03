import * as React from 'react';
import { Header } from './Header/header';
import Home  from './Home/home'

import { GlobalStyle } from '../global';

function App() {

    return (
        <div>
          <GlobalStyle />
          <Header title="売上フラッグ作成メーカー"/>
          <Home play={false} />
        </div>
    );
}

export default App;
