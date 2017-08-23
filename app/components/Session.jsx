var React = require('react');

var Session = React.createClass({
  componentDidMount: function(){
    var dropdown = $('#example-dropdown-1');
    var elem = new Foundation.Dropdown(dropdown);
  },
  render: function(){
    return(
      <div className="session">
        <div className="session__header">
          <div className="session__name">
            <h2>Session 1</h2>
          </div>
          <div className="session__controls">
            <div className="button-group">
              <a className="button">Ouvrir la session</a>
              <button className="dropdown button arrow-only" data-toggle="example-dropdown-1"></button>
              <div className="dropdown-pane" id="example-dropdown-1" data-dropdown data-hover="true" data-hover-pane="true" data-position="left" data-alignment="bottom">
                Just some junk that needs to be said. Or not. Your choice.
              </div>
            </div>
          </div>
        </div>
        <div className="session__body">
          <div className="row align-middle">
            <div className="medium-6 columns">
              <label className="session__infos">Nom du modem
                <p>Fritz!7845</p>
              </label>
            </div>
            <div className="medium-6 columns">
              <label className="session__infos">Status du modem
                <p>
                  <span className="badge success">Connecté</span>
                </p>
              </label>
            </div>
            <div className="medium-6 columns">
              <label className="session__infos">adresse MAC
                <p>00:1B:44:11:3A:B7</p>
              </label>
            </div>
            <div className="medium-6 columns">
              <label className="session__infos">Numéro de série
                <p>1452007468316270</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Session;
