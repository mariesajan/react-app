import React from "react";
import Title from  "./title";

export default class Header extends React.Component{
  static propTypes = {
    title : React.PropTypes.string.isRequired,
    changeHeaderTitle: React.PropTypes.func.isRequired,
  }
  handleHeaderChange(e){
    const title = e.target.value;
    this.props.changeHeaderTitle(title);
  }
  render(){
    return(
        <div>
          <Title title = {this.props.title} />
          Change Header: <input   onChange = {this.handleHeaderChange.bind(this)} />
        </div>
      );
  }
}
