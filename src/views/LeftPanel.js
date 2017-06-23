import React, { Component } from 'react';

export default class LeftPanel extends Component {
  render() {

    const panelStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding:'1rem',
      width: 380,
      height: '100%',
      border: '1px solid red'
    };

    return (
      <div style={panelStyle}>
        {this.props.children}
      </div>
    );
  }
}
