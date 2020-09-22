import React, { Component } from 'react';
import TOC from "./components/TOC"; 
import Content from './components/Contents'
import Subject from './components/Subject'
import './App.css';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject: {title:'web' ,sub: 'world wid web'},
      welcome: {title:'Welcome',desc: 'Hello, React!!'},
      contents: [
        {id: 1, title:'HTML',desc:'HTML is HyperText'},
        {id: 2, title:'CSS',desc:'HTML is HyperText'},
        {id: 3, title:'JavaScript',desc:'HTML is HyperText'},
      ]
    }
  }
  render () {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
    <div className="App">
      <Subject 
        title= {this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={function() {
          this.setState({mode:'welcome'});
        }.bind(this)}
      >
      </Subject>
      {/* <header>
        <h1><a href="/" onClick={function(e){
          console.log(e);
          e.preventDefault();   
          this.setState({
            mode:'read'
          });
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
      </header>    */}
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} ds={_desc}></Content>
    </div>
    );
  }  
}

export default App;
