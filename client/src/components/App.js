import React from 'react';
import Header from'./Header';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from'./streams/StreamDelete';
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <Router history = {history}>
          <Header />
          <Switch>
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/new" component={StreamCreate} />
            <Route exact path="/streams/edit/:id" component={StreamEdit} />
            <Route exact path="/streams/delete/:id" component={StreamDelete} />
            <Route exact path="/streams/:id" component={StreamShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
