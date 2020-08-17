import React from 'react';
import './App.css';
import Main from './main/'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
      </div>
    </Provider>
  );
}

export default App;
