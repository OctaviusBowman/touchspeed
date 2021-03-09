import React, { useState, useEffect } from 'react';
import "./index.css"
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
    <div className="flex min-h-screen bg-gray-1200">
      <div className="grid grid-cols-12 px-20">
        <div className="col-span-10 bg-gradient-to-br from-gray-1000 via-gray-1100 to-gray-1100 rounded-3xl my-9 z-10 shadow-md border border-white border-opacity-5">
          <div className="grid grid-rows-8">
            <div className="grid grid-cols-12 pl-4 pt-3">
              <img className="animate-pulse" src="/Favicon.png" alt="Touch Speed Logo" />
              <div className="col-span-10 place-self-center  text-gray-100 -ml-4 font-thin text-4xl">Touch Speed</div>
            </div>
            <Preview text={state.text} userInput={state.userInput} />
            <textarea
              id="text"
              autoFocus
              value={state.userInput}
              onChange={event => setState({ ...state, userInput: event.target.value, symbols: correctCount(event.target.value), started: true, finished: isDone(event.target.value) })}
              className="rounded focus:outline-none shadow-inner m-4 p-4 h-44"
              placeholder="A 60 second timer will start from the time you start typing..."
              readOnly={state.finished || state.sec >= 60}
            >
            </textarea>
            <div className="flex justify-between px-8 m-3">
              <button className="text-white font-medium tracking-wide border border-transparent rounded-lg w-28 p-1.5 bg-blue-900 shadow-lg transition duration-300 hover:bg-purple-500 focus:outline-none" onClick={() => window.location.reload()}>New Prompt</button>
              <Speed sec={state.sec} symbols={state.symbols} text={state.text} input={state.userInput} />
              <button className="text-white font-medium tracking-wide border border-transparent rounded-lg w-28 p-1.5 bg-blue-900 shadow-lg transition duration-300 hover:bg-purple-500 focus:outline-none" onClick={() => refresh()}>Restart</button>
            </div>
          </div>
        </div>
        <Leaderboard />
      </div>
    </div>

  );
}

export default App;
