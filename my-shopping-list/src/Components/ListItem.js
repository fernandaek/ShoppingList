import React, {Component} from 'react';
import '../Style/ListItem.css'
import FlipMove from 'react-flip-move';


class ListItem extends Component {
    constructor(props){
        super(props);

        // this.createList = this.createList.bind(this);

    }

    createList = (item) => {
        return (
            <div>
                <li key={item.key} onClick={() => this.delete(item.key)}>{item.text}</li>
                <span className="deleteButton" onClick={() => this.delete(item.key)}>Delete</span>
            </div>
        )}

        delete = (key) => {
            console.log("Key is: " + key);
            this.props.delete(key);
        }

    render(){
        var listEntries = this.props.entries;
        var listItems = listEntries.map(this.createList);

        return(
        <ul className="theList">
            <FlipMove duration={150} easing="ease-out">
                {listItems}
            </FlipMove>
        </ul>
        )
    }
}

export default ListItem