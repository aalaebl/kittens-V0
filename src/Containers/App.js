import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import '../Components/Card.css'
import ErrorBoundry from '../Components/ErrorBoundry'
import 'tachyons'


class App extends Component {

    constructor() {
        super()
        this.state = {
        users : [],
        searchfield : ''
        };
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users : users})) 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value }); 
    }


    render(){

        const {users , searchfield} = this.state;
        const filteredKittens = users.filter(kitten => {
            return kitten.username.toLowerCase().includes(searchfield.toLowerCase());
        })
        

        return !users.length ? 
        (
            <div className='App'>
                    <div className="Header">
                        <div className = "title">
                            <h1>Kittens</h1>
                            <i className="fa fa-paw"></i>
                        </div>  
                        <SearchBox searchChange = { this.onSearchChange }/>
                    </div>
                    <div className='tc pa3 ma6'>Loading...</div>
            </div>
        )  :    
        (
            <div className='App'>
                <div className="Header">
                    <div className = "title">
                        <h1>Kittens</h1>
                        <i className="fa fa-paw"></i>
                    </div>  
                    <SearchBox searchChange = { this.onSearchChange }/>
                </div>
                <ErrorBoundry>
                    <CardList users = { filteredKittens  }/>
                </ErrorBoundry>
            </div>
        );
    }   
}


export default App;

