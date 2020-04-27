import React, { Component } from "react";
import Loading from "./Loading";
import DynamicImport from "./DynamicImport";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DynamicImport extends Component {
  state = {
    component: null,
  };
  componentDidMount() {
    this.props.load().then((component) => {
      this.setState(() => ({
        component: component.default ? component.default : component,
      }));
    });
  }
  render() {
    return this.props.children(this.state.component);
  }
}

const Home = (props) => (
  <DynamicImport load={() => import("./Home")}>
    {(Component) =>
      Component === null ? <Loading /> : <Component {...props} />
    }
  </DynamicImport>
);

const Topics = (props) => (
  <DynamicImport load={() => import("./Topics")}>
    {(Component) =>
      Component === null ? <Loading /> : <Component {...props} />
    }
  </DynamicImport>
);

const Settings = (props) => (
  <DynamicImport load={() => import("./Settings")}>
    {(Component) =>
      Component === null ? <Loading /> : <Component {...props} />
    }
  </DynamicImport>
);

const LazyHome = React.lazy(() => import("./Home"));
const LazyTopics = React.lazy(() => import("./Topics"));
const LazySettings = React.lazy(() => import("./Settings"));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/settings" component={Settings} />

          <React.Suspense fallback={<Loading />}>
            <Route exact path="/" component={LazyHome} />
            <Route path="/topics" component={LazyTopics} />
            <Route path="/settings" component={LazySettings} />
          </React.Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
