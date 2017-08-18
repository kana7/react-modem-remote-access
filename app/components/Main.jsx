var React = require('react');
var Navigation = require('Navigation')

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="callout large primary">
        <div className="row column text-center">
          <h1>Panneau de contrôle</h1>
        </div>
      </div>
      <div className="row" id="content">
        <div className="medium-8 columns">

        </div>
        <div class="medium-3 columns sticky-container" data-sticky-container="" style="height: 318px;">
          <div class="sticky is-anchored is-at-top" data-sticky="d3ulh5-sticky" data-anchor="content" data-resize="xxflcj-sticky" style="max-width: 285px; margin-top: 0px; top: 0px; bottom: 1966px;">
          <h4>Categories</h4>
            <ul>
              <li><a href="#">Skyler</a></li>
              <li><a href="#">Jesse</a></li>
              <li><a href="#">Mike</a></li>
              <li><a href="#">Holly</a></li>
            </ul>
            <h4>Authors</h4>
            <ul>
              <li><a href="#">Skyler</a></li>
              <li><a href="#">Jesse</a></li>
              <li><a href="#">Mike</a></li>
              <li><a href="#">Holly</a></li>
            </ul>
          </div>
          </div>
      </div>
    </div>
  );
};

module.exports = Main;
