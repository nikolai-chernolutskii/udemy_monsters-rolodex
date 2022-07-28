import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  // Set the state of the component
  constructor() {
    super();

    this.state = {
      monsters: [], // Initial state of array will be empty prior to receiving external data, the null state

      searchField: '' // The initial state of the search field is empty, hence all the monsters are displayed using the .map method in render() below
    };

  }

  // Bring data from an external API
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        }
      ));
  }

  onSearchChange = (event) => {

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      });
  } // Moving this function into the class so that it is initialized just once, on the first initialization of the class


  render() {

    console.log('render from AppJS')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

    return (
      <div className="App">

        

        <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className='search-box'/>

        <CardList  monsters={filteredMonsters} />

      </div>
      // <CardList /> component has the "monsters" property (props) with the {filteredMonsters} value
    )
  }
}


export default App;