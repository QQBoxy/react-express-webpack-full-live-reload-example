/**************************************************
 File: BoxyHeader.js
 Name: BoxyHeader
 Explain: Boxy Header
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class BoxyHeader extends React.Component {
  render() {
    const { title } = this.props;
    return (
      /* jshint ignore: start*/
      <h1>{title}</h1>
      /* jshint ignore: end*/
    );
  }
}

BoxyHeader.propTypes = {
  title: PropTypes.string
};

BoxyHeader.defaultProps = {
  title: 'Hello!'
};

module.exports = BoxyHeader;