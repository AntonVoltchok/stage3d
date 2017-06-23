import React, {Component} from 'react';
import './../App.css';
import LeftPanel from "./../views/LeftPanel";
import StageMain from "./../views/StageMain";
import GhostButton from "./../controls/GhostButton";


const PROPERTY_VALUES = [
  {value: 'flex-start'},
  {value: 'center'},
  {value: 'flex-end'},
  {value: 'space-between'},
  {value: 'space-around'},
  {value: 'stretch'}
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      justifyContent: 'flex-start'
    };
  }

  handleClick = (property) => {
    console.log('handleclick', property.value);
    this.setState({justifyContent: property.value});
  };

  render() {

    const boxStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#4e53c9',
      color: '#fff',
      borderRadius: 5,
      width: 50,
      height: 50,
      margin: 10,
    };

    return (
      <div className="App">

        <div style={{display: 'flex', alignItems:'stretch', justifyContent:'stretch', width:'100%', height: '100%'}}>

          <LeftPanel>
            Buttons and such

            {PROPERTY_VALUES.map((property, index) => <GhostButton key={index} onClick={()=>this.handleClick(property)}>{property.value}</GhostButton>)}

          </LeftPanel>

          <StageMain justifyValue={this.state.justifyContent}>

            <div style={boxStyle}>BOX</div>
            <div style={boxStyle}>BOX</div>
            <div style={boxStyle}>BOX</div>
            <div style={boxStyle}>BOX</div>
            <div style={boxStyle}>BOX</div>

          </StageMain>
        </div>

      </div>
    );
  }
}

export default App;


/*


 import logo from './logo.svg';
 import CubeSpinnerContainer from "./containers/CubeSpinnerContainer";
 // import DemoMain from "./views/DemoMain";

 <div className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <h2>Flexo Boxo Presto</h2>
 </div>
 *
 * */

//         <CubeSpinnerContainer/>