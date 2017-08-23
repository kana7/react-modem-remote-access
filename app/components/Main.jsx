var React = require('react');
var Navigation = require('Navigation');
var Session = require('Session');
var SessionList = require('SessionList');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Navigation/>
        <div className="callout">
          <div className="row column">
            <nav aria-label="You are here:" role="navigation">
              <ul className="breadcrumbs">
                <li><a href="#">Home</a></li>
                <li>Panneau de contrôle</li>
                <li>
                  Session 1
                </li>
              </ul>
            </nav>
            <h1>Panneau de contrôle</h1>
          </div>
        </div>
        <div className="row" id="content">
          <div className="medium-8 columns">
            <Session></Session>
          </div>
          <div className="medium-3 columns sticky-container" data-sticky-container="">
            <div className="sticky is-anchored is-at-top" data-sticky="d3ulh5-sticky" data-anchor="content" data-resize="xxflcj-sticky" style={{maxWidth: 285+'px', marginTop: 0, top: 0, bottom: 1966+'px'}}>
              <SessionList></SessionList>
            </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
