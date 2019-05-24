import React from 'react';
import { connect } from 'react-redux';

const AppContainer = (props) => (
  <div>hey</div>
);

const mapStateToProps = ({ app }) => ({
  app,
});

export default connect(mapStateToProps)(AppContainer);
