import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';

import CreateForm from 'pages/CreateForm';
import Details from 'pages/Details';
import EditForm from 'pages/EditForm';
import Home from 'pages/Home';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={CreateForm} />
        <Route exact path='/:id' component={Details} />
        <Route path='/edit/:id' component={EditForm} />
      </Switch>
    </Router>
  );
}
