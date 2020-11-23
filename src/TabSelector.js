import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props)
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={(event) => {this.props.onChangeTab(event)}}
          className={this.props.currentTab === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={(event) => this.props.onChangeTab(event)}
          className={this.props.currentTab === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={(event) => this.props.onChangeTab(event)}
          className={this.props.currentTab === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
