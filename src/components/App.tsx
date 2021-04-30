import * as React from 'react';
import { SubComponent } from './sub-component';
import { Header } from './Header/header'

function App() {
    return (
        <div>
          <Header title="header"/>
          <h1>Hello React!</h1>
          <SubComponent name="My Counter for TypeScript"/>
        </div>
    );
}

export default App;
