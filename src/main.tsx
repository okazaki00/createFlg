import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/header';

ReactDOM.render(
    <div>
      <Header />
      <App />
    </div>,
  document.getElementById('app') as HTMLElement
);


