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

  onSearchChange = (event) => {
              
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      });
  } // Moving this function into the class so that it initialized just once, on the first initialization of the class


  render() {

    console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='Search monsters'

          onChange={onSearchChange}

        />

        {
          filteredMonsters.map(
            (monster) => {
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