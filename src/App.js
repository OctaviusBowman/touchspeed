import React, { useState, useEffect } from 'react';
import Preview from './Preview'
import Speed from './Speed'
import getPrompt from './getPrompt'

const initialState = {
  text: getPrompt(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

const App = () => {

  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (state.started && !state.finished) {
      const interval = setInterval(() => {
        setState(state => ({ ...state, sec: state.sec + 1 }))
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [state.started, state.finished])


  const correctCount = (userText) => {
    const text = userText.replace(' ', '');
    return userText.replace(' ', '').split('').filter((symbol, index) => symbol === text[index]).length;
  }

  const isDone = (userText) => {

    if (userText === state.text
      // || (state.sec === 60)
    ) {
      return true
    }
  }

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Preview text={state.text} userInput={state.userInput} />
          <textarea
            value={state.userInput}
            onChange={event => setState({ ...state, userInput: event.target.value, symbols: correctCount(event.target.value), started: true, finished: isDone(event.target.value) })}
            className="form-control mb-3"
            placeholder="Start Typing..."
            readOnly={state.finished || state.sec >= 60}
          >
          </textarea>
          <div className="text-left">
            <button className="btn btn-light" onClick={() => window.location.reload(false)}>New Prompt</button>
          </div>
          <Speed sec={state.sec} symbols={state.symbols} text={state.text} input={state.userInput} />
          <div className="text-right">
            <button className="btn btn-light" onClick={() => setState(initialState)}>Restart</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
