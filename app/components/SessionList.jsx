var React = require('react');

var SessionList = (props) =>{
  return(
    <div className="session-list">
      <div className="session-list__header">
        <h3 className="session-list__header__title">
          Liste des sessions courantes
        </h3>
      </div>
      <div className="clearfix session-list__item">
        <div className="small-12 medium-6 columns session-list__item__infos">
          <div className="session-list__item__infos__title">
            <p className="name">
              Session 1
            </p>
            <p className="status">
              Ouverte
            </p>
          </div>
        </div>
        <div className="small-12 medium-6 columns session-list__item__controls">
          <div className="session-list__item__controls__action">
            <button className="button primary small" disabled>
              Activer
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix session-list__item">
        <div className="small-12 medium-6 columns session-list__item__infos">
          <div className="session-list__item__infos__title">
            <p className="name">
              Session 2
            </p>
            <p className="status">
              En attente
            </p>
          </div>
        </div>
        <div className="small-12 medium-6 columns session-list__item__controls">
          <div className="session-list__item__controls__action">
            <button className="button primary small">
              Activer
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix session-list__item">
        <div className="small-12 medium-6 columns session-list__item__infos">
          <div className="session-list__item__infos__title">
            <p className="name">
              Session 3
            </p>
            <p className="status">
              Cloturée
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = SessionList;
