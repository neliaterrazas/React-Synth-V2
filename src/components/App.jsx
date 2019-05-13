import React from 'react';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Keyboard from './Keyboard';
import Board from './Board';
import Knob from './Knob/Knob';
// import './Knob/styling.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {
        classNames: ['one', 'rectangleOne', 'two', 'rectangleTwo', 'three', 'four', 'rectangleThree', 'five', 'rectangleFour', 'six', 'rectangleFive', 'seven'],
        imgSrc: ['keyOne', 'Rectangle', 'keyTwo', 'Rectangle', 'keyThree', 'keyFour', 'Rectangle', 'keyFive', 'Rectangle', 'keySix', 'Rectangle', 'keySeven'],
        columns: 3,
      },
      defaultKeys: {
        keys: [''],
        speed: '8n'
      },
      options: {
        oscillator: {
          type: 'triangle',
        },
        envelope: {
          attack: 0.005 ,
          decay: 0.1 ,
          sustain: 0.3 ,
          release: 1
          }
      }
    };
  }

  handleChange(newValue) {
    console.log(newValue)
    this.setState({
      value: newValue
    });
  };

  // <div className="App">
  //   <Knob
  //     size={100}
  //     numTicks={25}
  //     degrees={260}
  //     min={1}
  //     max={100}
  //     value={30}
  //     color={true}
  //     onChange={() =>{this.handleChange}}
  //     />
  //
  //   <Knob
  //     numTicks={125}
  //     degrees={180}
  //     min={1}
  //     max={100}
  //     value={0}
  //     onChange={() =>{this.handleChange}}
  //     />
  // </div>
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' render={() => <Board defaultKeys={this.state.defaultKeys} keyClassNames={this.state.board.classNames} imgSrc={this.state.board.imgSrc}/>} />
          <Route path='/Error' component={Error404} />
        </Switch>

      </div>
    );
  }



}
App.PropTypes = {

};

export default App;
