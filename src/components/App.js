import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Loader from './loader';

//containers 
const Posts = React.lazy(() => import('../components/posts/posts'));
const PostsContent = React.lazy(()=> import('../components/posts/post-content'));
const PostsCreate = React.lazy(()=> import('../components/posts/posts-create'));

class App extends Component {
  render() {
    return (      
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/posts/new" component={PostsCreate} />
            <Route path="/posts/:id" component={PostsContent} />
            <Route path="/" component={Posts} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;