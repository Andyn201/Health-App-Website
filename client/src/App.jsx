import React, {useEffect, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// Redux
import store from './data/store';
import { loadUser } from './data/auth/auth.actions';
import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';


// Stripe
import {Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// Public Pages
import Home2 from './pages/public/home/Home2';



// Styles
import './App.css';


// Components
import Spinner from './components/spinner/Spinner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Routes
const Routes = lazy(() =>   import('./routes/Routes'));
// const MessengerCustomerChat = lazy(() =>   import('./components/messenger/Messenger'));




const stripePromise = loadStripe('pk_live_NAoyexHASsvmbfnhnYCqZNmy00b8ZA8VUf');



function App() {

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
            <div className="app">
              <Suspense fallback={ <Spinner />}>
                <Header />
                <Switch>    
                  <Route exact path="/" component={Home2} />
                  <Route component={Routes} />
                </Switch>
                <Footer />

                {/* Facebook 
                <MessengerCustomerChat />

                */}

              </Suspense>
            </div>
        </Elements>
      </Router>
    </Provider>
  );
}

export default App;
