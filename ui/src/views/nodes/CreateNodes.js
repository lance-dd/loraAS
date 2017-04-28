import React, { Component } from "react";
import { Link } from "react-router";

import NodeStore from "../../stores/NodeStore";
import NodesForm from "../../components/NodesForm";
import ApplicationStore from "../../stores/ApplicationStore";

class Createnodes extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      application: {},
      nodes: {
        useApplicationSettings: false,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    ApplicationStore.getApplication(this.props.params.applicationID, (application) => {
      this.setState({application: application});
    });
  }

  onSubmit(nodes) {
    // nodes.applicationID = this.props.params.applicationID;
    // nodestore.createnodes(this.props.params.applicationID, nodes, (responseData) => {
    //   this.context.router.push('/applications/'+this.props.params.applicationID);
    // });
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/applications">Applications</Link></li>
          <li><Link to={`/applications/${this.props.params.applicationID}`}>{this.state.application.name}</Link></li>
          <li className="active">Create nodes</li>
        </ol>
        <hr />
        <div className="panel panel-default">
          <div className="panel-body">
            <NodesForm   />
          </div>
        </div>
      </div>
    );
  }
}

export default Createnodes;
