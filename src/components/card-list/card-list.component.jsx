import { Component } from "react";

class CardList extends Component {

    
    render() {
        console.log('render from CardList');
        
        const { monsters } = this.props; 
        // 'monsters' will be a _property_ of _this_ component (CardList) - indeed, in the App.jsx file the <CardList /> component has the "monsters" property with the value {filteredMonsters}

        return (
            <div>
                {monsters.map(
                    (monster) => {
                    return (
                        <h1 key={monster.id}>{monster.name}</h1>
                    )
                })}
            </div>
        )
        
    }
    
}


export default CardList;