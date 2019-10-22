import React from 'react';
import Header from'./Header';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from'./streams/StreamDelete';
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import { Router, Route } from 'react-router-dom';
import history from '../history'

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <Router history = {history}>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
          <Route exact path="/streams/show" component={StreamShow} />
        </Router>
      </div>
    );
  }
}

export default App;
