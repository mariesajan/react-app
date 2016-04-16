import React from "react";

export  default class  extends React.Component{
  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }
  render(){
    return <h2> {this.props.title} </h2>
  }
}
