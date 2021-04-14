import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import './Styles/main.scss';
import Home from './Components/Home';
import Recipe from './Components/Recipe';

function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:id" component={Recipe} />
            </Switch>
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
