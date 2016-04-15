import React from "react";
import Title from "./title";

export default class Footer extends React.Component{
  handleFooterTitle(e){
    const footer = e.target.value;
    this.props.changeFooterTitle(footer);

  }
  render(){
    return (
        <div>
          Change Footer :     <input onChange = {this.handleFooterTitle.bind(this)} />
          <Title title = {this.props.title} />
        </div>
      );
  }
}
