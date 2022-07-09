import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [], // Initial state of array will be empty prior to receiving external data, the null state
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state);
        }
      ));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default App;
