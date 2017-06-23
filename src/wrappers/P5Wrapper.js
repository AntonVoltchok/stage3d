import React from 'react';
import P5 from 'P5'

export default class P5Wrapper extends React.Component {

  componentDidMount() {
    this.canvas = new P5(this.props.sketch, this.wrapper);
    if( this.canvas.redrawOnPropChange ) {
      this.canvas.redrawOnPropChange(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new P5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.redrawOnPropChange ) {
      this.canvas.redrawOnPropChange(newprops);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}/>;
  }
}