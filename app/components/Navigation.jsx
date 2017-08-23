var React = require('react');
var {
  Link,
  IndexLink
} = require('react-router');

var Navigation = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Modem remote access</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">© Luxembourg Online S.A.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
