import React from 'react';
import CardComponent from './CardComponent';
import NewCardForm from './NewCardForm';
import { Container } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    cards: [
      {question: 'What is React?', answer: 'Great Question.'},
      {question: 'What is Javascript?', answer: 'Javascript is a scripting language.'},
      {question: 'Why did I sign up for this class?', answer: 'To get smarter.'}
    ]
  }

  addCardHome = (newCard) => {
    this.setState({cards: [...this.state.cards, newCard]})
  }

  render() {
    return (
      <div>
        <h1>React Flashcards!</h1>
        <NewCardForm addCardForm={this.addCardHome}/>
        {this.state.cards.map( item => {
          return(
            <CardComponent key={item.question} card={item} />
          )
        })}
      </div>
    );
  }
}

export default App;
