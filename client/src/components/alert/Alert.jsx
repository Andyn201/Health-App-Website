import React from 'react';
import { connect } from 'react-redux';

// Alert
import './Alert.scss';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
      <p key={alert.id}  className={alert.alertType}>{alert.msg}</p>
  ));


const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
