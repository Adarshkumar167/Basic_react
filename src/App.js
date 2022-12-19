import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name : 'Adarsh',
          id: '1',
        },
        {
          name : 'Rohit',
          id: '2',
        },
        {
          name : 'Shaulendra',
          id: '3',
        },
        {
          name : 'Harshit',
          id: '4',
        },
      ],
    };
  }
  
  render() {
      return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
