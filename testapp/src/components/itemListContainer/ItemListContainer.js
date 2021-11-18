import React, { Component } from 'react';
import ItemList from '../itemList/ItemList';
import Button from '../itemListContainer/Button.js';

export default class ItemListContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            list: []
        }
        this.addItemToList = this.addItemToList.bind(this);
    }
    
    addItemToList(){
        const itemToAdd = {bazar:'Taza', precio:450}
        this.setState({list:[...this.state.list, itemToAdd]});
    }

    render() {
        return (
            <div>
                <ul>
                    {
                    this.state.list.length > 0 ?
                    this.state.list.map(item =>{
                        return <ItemList bazar={item.bazar} precio={item.precio}/>
                    })
                    : <h1>{this.props.greeting}</h1>
                    }
                </ul>
                <Button onClick={this.addItemToList}/>
            </div>
        )
    }
}
