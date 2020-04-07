import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlbumListPage from '../containers/albumList';
import AlbumPage from '../containers/album';

const Main = () => (
  <main>
    {/* <Navbar /> */}
    <div id="main-container">
      <Switch>
        <Route exact component={AlbumPage} path="/:albumId" />
        <Route component={AlbumListPage} />
      </Switch>
    </div>
  </main>
);

export default Main;
