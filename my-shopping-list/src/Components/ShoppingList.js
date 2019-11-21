import React, { Component } from 'react';
import ListItem from './ListItem';
import '../Style/ShoppingList.css';

class ShoppingList extends Component {
    constructor(props){
        super(props);

        //I wanna change the state of my list, remove, and add.
        this.state = {
            items: []
        }
    }

    AddItem = (event) => {

        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((previousState) => {
                return {
                    items: previousState.items.concat(newItem)
                }
            })
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        event.preventDefault();
    }

    deleteItem = (key) => {
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.AddItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Enter your shooping list"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <ListItem entries={this.state.items}
                          delete={this.deleteItem}
                />
            </div>
        )
    }
}

export default ShoppingList