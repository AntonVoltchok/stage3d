import React, { Component } from 'react';

export default class GhostButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  hoverOn = () => { 
    this.setState(()=>({hover: true}))
  };

  hoverOff = () => {
    this.setState(()=>({hover: false}))
  };

  render() {

    const {hover} = this.state;

    const buttonStyle = {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      border: '1px solid #7b42de',
      color: !hover ? '#7b42de' : '#fff',
      background: hover ? '#7b42de' : '#fff',
      borderRadius: 500,
      fontSize: '.8rem',
      fontWeight: 400,
      cursor: 'pointer',
      boxShadow: hover ? '0 5px 12px rgba(0,0,0,.12)' : '0 3px 6px rgba(0,0,0,.12)',
      padding: '.5rem 1rem',
      margin:'1rem',
      transition: 'all .25s ease-in-out',
      ...this.props.style
    }
;
    return (
      <div onClick={this.props.onClick} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} label={this.props.label} style={buttonStyle}>
        {this.props.children}
      </div>
    );
  }
}


