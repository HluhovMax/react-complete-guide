import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 22},
            {name: 'Lilya', age: 22},
            {name: 'Mettew', age: 1}
        ]
    }

    switchNameHandler = () => {
        // console.log('was clicked')
        // DONT DO THIS this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: 'Maximilian', age: 22},
                {name: 'Lilya', age: 23},
                {name: 'Mettew', age: 1}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
            </div>
        );
    }
}

export default App;
