import React, { Component } from 'react';

class NodesForm extends Component {
  constructor() {
    super();

    this.state = {
      nodes: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps){
    let nodes = this.updateNodeSettings(nextProps.application, nextProps.node);

    this.setState({
      nodes: nodes });
    }



  handleSubmit(e) {
    e.preventDefault();
    let nodes = this.state.nodes;
    this.props.onSubmit(nodes);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        上传excel表格:<input  type="file" name="xlfile" id="xlf" />
          <button type="submit" className={"btn btn-primary pull-right " + (this.state.disabled ? 'hidden' : '')}>Submit</button>
      </div>
      </form>


    );
  }
}

export default NodesForm;
