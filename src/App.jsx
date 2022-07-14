import { Component } from 'react';

import './App.css';

class App extends Component {
  // Set the state of the component
  constructor() {
    super();

    this.state = {
      monsters: [], // Initial state of array will be empty prior to receiving external data, the null state

      searchField: '' // The initial state of the search field is empty, hence all the monsters are displayed using the .map method in render() below
    };

    console.log('constructor')
  }

  // Bring data from an external API
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

    const filteredMonsters = this.state.monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
      }); /* describing the list of filtered monsters including the _empty_ search field */
    // We move this variable outside the return (below) because we always want to be able to come back to the original state when we unfilter the new array

    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='Search monsters'

          onChange={
            (event) /* We are going to get back an event */ => {
              console.log(event);

              const searchField = event.target.value.toLocaleLowerCase(); /* describing the _non-empty_ search field and making it lowercase */

              this.setState(
                () => {
                  return { searchField };
                }) /* setting the state to the list of _filtered_ monsters */
            }
          }

        />

        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          }) /* Then we map over the _filteredMonsters_ constant instead of _this.state_, describing the unfiltered list using the .map method */
        }

      </div>
    )
  }
}


export default App;
