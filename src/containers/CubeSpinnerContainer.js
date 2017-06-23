import React from'react';
import P5Wrapper from '../wrappers/P5Wrapper';
import webglcube from './../sketches/webgl-cube-sketch';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class CubeSpinnerContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      rotation: 150,
      stateSketch: webglcube,
    };
  }

  rotationChange = (e) => this.setState({rotation:e.target.value});

  pressEvent = () =>  this.setState(()=>({stateSketch:webglcube}));

  onSliderChange = (rotation) => {
    console.log({rotation});
    this.setState({rotation,
    });
  };

  onAfterChange = (rotation) => {
    console.log({rotation});
  };

  render () {

    return (
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
        <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
        <div style={{margin:'30px auto',width:400}}>
          <Slider
            min={0}
            max={360}
            value={this.state.rotation}
            onChange={this.onSliderChange}
            onAfterChange={this.onAfterChange}
            handleStyle={{
              borderColor: '#d3d3d3',
              boxShadow: '0 2px 5px rgba(0,0,0,.12)',
              height: 26,
              width: 26,
              marginLeft: -14,
              marginTop: -12,
              backgroundColor: '#efefef',
            }}/>
        </div>
        <input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onChange={this.rotationChange}/>
      </div>
    );
  }
}

        //<button onClick={this.pressEvent}>Change Sketch</button>
