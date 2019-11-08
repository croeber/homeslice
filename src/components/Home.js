import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";
import Map from './Map'
class Home extends React.Component {
  componentDidMount() {
    if (this.props.circuits.length <= 0) {
      this.props.fetchData();
    }
  }

  render() {
    const { circuits } = this.props;

    return (
      <article>
        <div className="jumbotron mt-4 bounceIn">
          <div className="container">
            <Map/>
            <h1 className="display-3">Chris Roeber</h1>
            <p>Hi. I'm a full stack developer. Let me show you how!</p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more »
              </a>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <div className="bg-light rounded p-2">
                <h2>Front End</h2>
                <p>JavaScript</p>
                <p>Angular</p>
                <p>React</p>
                <p>Bootstrap</p>
                <p>Material Design</p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="bg-light rounded p-2">
                <h2>Back End</h2>
                <p>NodeJs</p>
                <p>ExpressJs</p>
                <p>HapiJs</p>
                <p>PHP</p>
                <p>Laravel</p>
                <p>.NET 4</p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="bg-light rounded p-2">
                <h2>Database</h2>
                <p>SQL</p>
                <p>MongooseDB</p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </article>
    );
  }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = state => ({
  circuits: state.data
});

const mapDispatchToProps = {
  fetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
