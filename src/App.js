import React, {Component} from 'react';
import './App.css';
import FlexBoxContainer from './containers/FlexBoxContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      justifyContent: 'flex-start'
    };
  }

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

        <FlexBoxContainer/>

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