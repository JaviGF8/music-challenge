import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlbumListPage from '../containers/albumList';
import AlbumPage from '../containers/album';
import { ALBUM_URL, MAIN_URL } from '../utils/urls';

const Main = () => (
  <main>
    {/* <Navbar /> */}
    <div id="main-container">
      <Switch>
        <Route exact component={AlbumPage} path={ALBUM_URL} />
        <Route exact component={AlbumListPage} path={MAIN_URL} />
      </Switch>
    </div>
  </main>
);

export default Main;
