import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [], // Initial state of array will be empty prior to receiving external data, the null state
    };

    console.log('constructor')
  }

  componentDidMount() {

    console.log('componentDidMount')

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
        return { monsters: users }
      },
        () => {
          console.log(this.state);
        }
      ));
  }

  render() {

    console.log('render')

    

    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='Search monsters'

          onChange={
            (event) /* We are going to get back an event */ => {
            console.log(event);

            const searchString = event.target.value.toLocaleLowerCase(); /* describing the search string and making it lowercase */

            const filteredMonsters = this.state.monsters.filter(
              (monster) => {
                return monster.name.toLocaleLowerCase().includes(searchString);
              }); /* describing the list of filtered monsters including the search string */

            this.setState(
              () => {
              return { monsters: filteredMonsters };
            }) /* setting the state to the list of filtered monsters */
          }
          }

        />

        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ) 
          }) /* describing the unfiltered list using the .map method */
        } 
        
      </div>
    )
  }
}


export default App;
