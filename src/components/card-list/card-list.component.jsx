import { Component } from "react";
import Card from "../card/card.component";

import './card-list.styles.css';

class CardList extends Component {

    render() {
        console.log('render from CardList');

        const { monsters } = this.props;
        // 'monsters' will be a _property_ of _this_ component (CardList) - indeed, in the App.jsx file the <CardList /> component has the "monsters" property with the value {filteredMonsters}

        return (
            <div className='card-list'>
                {monsters.map(
                    (monster) => {
                        return (
                            <Card monster={monster} />
                            )
                    })}
            </div>
        )

    }

}


export default CardList;