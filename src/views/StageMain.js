import React, { Component } from 'react';


export default class StageMain extends Component {
  render() {
    console.log('props', this.props.justifyValue);


    return (
      <div style={{display: 'flex', justifyContent:`${this.props.justifyValue}`, alignItems:'center', border: '1px solid purple', width:'100%', transition:'1s all'}}>
        {this.props.justifyValue}
        {this.props.children}
      </div>
    );
  }
}
