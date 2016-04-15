import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer";
import Header from "./header";

class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      header : "Welcome Marie",
      footer : "Copyright @ Marie 2016"
      };
  }

  changeHeaderTitle(title){
    this.setState({header:title});
  }
  changeFooter(footer){
    this.setState({footer});
  }
  render(){
    return (
        <div>
          <Header changeHeaderTitle = {this.changeHeaderTitle.bind(this)}  title = {this.state.header} />
          <Footer  changeFooterTitle = {this.changeFooter.bind(this)} title = {this.state.footer} />
        </div>
      );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
