import React from "react";
import Title from  "./Title";

export default class Header extends React.Component{
  handleHeaderChange(e){
    const title = e.target.value;
    this.props.changeHeaderTitle(title);
  }
  render(){
    return(<div>
              <Title title= {this.props.title}/>
              Change Header: <input   onChange = {this.handleHeaderChange.bind(this)}/>
          </div>)
  }
}
