import React, { Component } from 'react';

class QuizQuestion extends Component {
  render() {
    console.log(this.props.quiz_question);
    return (
      <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{this.props.quiz_question}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;