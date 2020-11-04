import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 22},
            {name: 'Lilya', age: 22},
            {name: 'Mettew', age: 1}
        ]
    });

    const switchNameHandler = (newName = 'Common') => {
        setPersonsState({
            persons: [
                {name: newName, age: 22},
                {name: 'Lilya', age: 23},
                {name: 'Mettew', age: 1}
            ]
        })
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Max', age: 22},
                {name: 'Lilya', age: 23},
                {name: event.target.value, age: 1}
            ]
        })
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler.bind(this, 'Maksym')}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                click={() => switchNameHandler()}>My Hobbies: Programing</Person>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}>My Hobbies: Books</Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
                changed={nameChangedHandler}>My Hobbies: Toys</Person>
        </div>
    );
}

export default app;