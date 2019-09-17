import React from 'react';
import Header from'./Header';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from'./streams/StreamDelete';
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
          <Route exact path="/streams/show" component={StreamShow} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
