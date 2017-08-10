/**************************************************
 File: Boxy.js
 Name: Boxy
 Explain: Boxy
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict';
import React from 'react';
import BoxyHeader from './BoxyHeader';
import BoxyShow from './BoxyShow';

class Boxy extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title : "Boxy Home",
      showHomepage : true,
      buttonText : "Show List",
      blogs: []
    };
    this.toggleSwitchMode = this.toggleSwitchMode.bind(this);
  }
  toggleSwitchMode(id) {
    this.setState({
      showHomepage: !this.state.showHomepage,
      buttonText: (this.state.showHomepage) ? "Hide List" :"Show Favorite"
    });
  }
  componentDidMount() {
    fetch("/api/blog", {
      credentials: "include",
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => res.json())
    .then((blogs) => {
      this.setState({ blogs });
    })
    .catch(function (err) {
      console.log(err);
    });
  }
  renderBoxys() {
    const { blogs } = this.state;

    const boxyElements = blogs.map((blog) => (
      /* jshint ignore: start*/
      <li key={blog.id}>
        <a href={blog.url}>{blog.name}</a>
      </li>
      /* jshint ignore: end*/
    ));
    return (
      /* jshint ignore: start*/
      <div>
        <h2>Favorite List</h2>
        <ul>{boxyElements}</ul>
      </div>
      /* jshint ignore: end*/
    );
  }
  renderHomepage() {
    return (
      /* jshint ignore: start*/
      <span>
        <h2>Welcome to Boxy!</h2>
        <p>Boxy has many dreams and treasures.</p>
        <p>Waiting for you to discover!</p>
        <p>By Boxy Huang.</p>
      </span>
      /* jshint ignore: end*/
    );
  }
  render() {
    return (
      /* jshint ignore: start*/
      <div className="container">
        <div className="header">
          <BoxyHeader title={this.state.title} />
        </div>
        <div className="nav">
          <BoxyShow title={this.state.buttonText} onShow={this.toggleSwitchMode} />
        </div>
        <div className="section">
          {this.state.showHomepage ? this.renderHomepage() : this.renderBoxys()}
        </div>
      </div>
      /* jshint ignore: end*/
    );
  }
}

module.exports = Boxy;