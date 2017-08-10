/**************************************************
 File: BoxyShow.js
 Name: BoxyShow
 Explain: Boxy Show
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class BoxyShow extends React.Component {
  render() {
    const {
      title,
      onShow
    } = this.props;

    return (
      /* jshint ignore: start*/
      <p
        onClick={()=> {
          onShow && onShow();
        }}
      >{title}</p>
      /* jshint ignore: end*/
    );
  }
}

BoxyShow.propTypes = {
  title: PropTypes.string
};

BoxyShow.defaultProps = {
  title: 'Show List'
};

module.exports = BoxyShow;