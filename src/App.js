import React, { Component } from 'react';
import TabSelector from './TabSelector';
import './App.css';

const Home = () => <p>This is the Home component!</p>;
const About = () => <p>This challenge is about tabs!</p>;
const Contact = () => <p>Feel free to contact us!</p>;
const Error = () => <p>Something went <strong>wrong</strong>!</p>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'home'
    };
  }

  handleChangeTab = (event) => {
    //console.log(event.target.id)
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent() {
    switch(this.state.activeId) {
      case 'home':
        return <Home />;
        case 'about':
          return <About />;
          case 'contact':
          return <Contact />;
      default:
        return <Error />;
    }
  }

  render() {
    return (
      <div className="App">
        <TabSelector onChangeTab={(id) => {this.handleChangeTab(id)}} currentTab={this.state.activeId} />
        <div className="App-content">
          {
            this.getTabContent()
          }
        </div>
      </div>
    );
  }
}

export default App;
