import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlbumListPage from '../containers/albumList';
// import Navbar from '../components/Navbar';

const Main = () => (
  <main>
    {/* <Navbar /> */}
    <div id="main-container">
      <Switch>
        {/* <Route exact component={LoginPage} path={LOGIN_PAGE} /> */}
        <Route component={AlbumListPage} />
      </Switch>
    </div>
  </main>
);

export default Main;
