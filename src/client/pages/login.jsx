/** @jsx React.DOM */
'use strict';
var React = window.React = require('react');

module.exports = React.createClass({

  render: function () {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>React Koa Demo</h1>
          <div className="row">
            <div className="col-md-8">
              <p></p>
              hello
            </div>
            <div className="col-md-4">
              <form role="form" action="/login" method="post" className="form">
                <div className="form-group">
                  <label for="input-username">Username</label>
                  <input id="input-username" type="text" placeholder="username" name="username" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="input-password">Password</label>
                  <input id="input-password" type="password" placeholder="password" name="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success pull-right">Connexion</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});