import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Auth Pages
import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register';


// Public Pages
import Privacy from '../pages/public/privacy/Privacy';
import Terms from '../pages/public/terms/Terms';
import About from '../pages/public/about/About';
import Contact from '../pages/public/contact/Contact';
import ForgotPassword from '../pages/auth/reset/ForgotPassword';
import ResetPassword from '../pages/auth/reset/ResetPassword';
import Error from '../pages/public/error/Error';
import Marketing from '../pages/public/marketing/Marketing';
import Landing from '../pages/public/marketing/Landing';
import AL from '../pages/public/marketing/L';
import Audit from '../pages/public/marketing/Audit';
import Opt from '../pages/public/marketing/Opt';
import Samples from '../pages/public/samples/Sample_Sites';







// Private Pages
import PrivateRoute from './PrivateRoutes';
import Account from '../pages/private/account/Account';
import Information from '../pages/private/information/Information';
import Course from '../pages/private/information/Course';
import Logs from '../pages/private/log/Logs';
import Log from '../pages/private/log/Log';
import AddLog from '../pages/private/log/AddLog';
import EditLog from '../pages/private/log/EditLog';
import Coaching from '../pages/private/coaching/Coaching';
import CoachingComments from '../pages/private/coaching/CoachingComments';


// Admin Pages
import AdminRoute from './AdminRoutes';
 import Admin from '../pages/admin/Admin';
import AdminUsers from '../pages/admin/AdminUsers';
import AdminPosts from '../pages/admin/AdminPosts';
import AdminAppointments from '../pages/admin/AdminAppointments';


const Routes = () => {
  return (
      <Switch>


              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/reset" component={ForgotPassword} />
              <Route exact path="/reset/:token" component={ResetPassword} />



              {/* Public Pages */}

              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/terms" component={Terms} />
              <Route exact path="/marketing" component={Marketing} />
              <Route exact path="/o" component={Opt} />
              <Route exact path="/la" component={Landing} />
              <Route exact path="/al" component={AL} />
              <Route exact path="/audit" component={Audit} />
              <Route exact path="/samples" component={Samples} />

  

              <PrivateRoute exact path="/dashboard/log" component={Logs} />
              <PrivateRoute exact path="/dashboard/log/:log" component={Log} />
              <PrivateRoute exact path="/dashboard/addlog" component={AddLog} />
              <PrivateRoute exact path="/dashboard/editlog/:log" component={EditLog} />
              <PrivateRoute exact path="/dashboard/account" component={Account} />
              <PrivateRoute exact path="/dashboard/information/:vid" component={Information} />
              <PrivateRoute exact path="/dashboard/information/:course/:vid" component={Course} />
              <PrivateRoute exact path="/dashboard/help" component={Coaching} />
              <PrivateRoute exact path="/dashboard/help/:post" component={CoachingComments} />

     

     
              <AdminRoute exact path="/admin" component={Admin} />
              <AdminRoute exact path="/admin/appointments" component={AdminAppointments} />
              <AdminRoute exact path="/admin/users" component={AdminUsers} />
              <AdminRoute exact path="/admin/posts/:id" component={AdminPosts} />
              
            

              <Route path="*" component={Error} status={404} />
      </Switch>
  );
};

export default Routes;
