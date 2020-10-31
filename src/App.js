import React, { useState, useEffect } from 'react';
import Preview from './Preview'
import Speed from './Speed'
import getPrompt from './getPrompt'
import Leaderboard from './Leaderboard'

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

  const refresh = () => {
    setState(initialState)
    document.getElementById("text").focus()
  }

  return (
    // <div className="container">
    <div className="container-fluid">
      {/* <div className="mb-5 mt-5"> */}
      <div className='row'>
        {/* <div className="row new-border"> */}
        <div className="col-8 offset-1">
          {/* <div className="col-md-6 offset-md-3"> */}
          <div className="card card-body">
            <div className="header">
              <img src="/Favicon.png" alt="" />
              <h1 className="header-text">Touch Speed</h1>
            </div>
            <Preview text={state.text} userInput={state.userInput} />
            <textarea
              id="text"
              autoFocus
              value={state.userInput}
              onChange={event => setState({ ...state, userInput: event.target.value, symbols: correctCount(event.target.value), started: true, finished: isDone(event.target.value) })}
              className="form-control mb-5"
              placeholder="Start Typing..."
              readOnly={state.finished || state.sec >= 60}
            >
            </textarea>
            <div className="d-flex justify-content-between button-spacing">
              <button className="btn-style" onClick={() => window.location.reload()}>New Prompt</button>
              <Speed sec={state.sec} symbols={state.symbols} text={state.text} input={state.userInput} />
              <button className="btn-style" onClick={() => refresh()}>Restart</button>
            </div>
          </div>
        </div>
        <div id="leaderboard" className="card-body right col-xl-2">
          <Leaderboard />
        </div>
      </div >
    </div>

  );
}

export default App;
