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
  // Touch Speed Logo - parent class
  // grid grid-cols-12 1080p:grid-cols-6

  return (
    <div className="flex min-h-screen bg-gray-1200">
      <div className="grid grid-cols-12 px-20">
        <div className="col-span-10 bg-gradient-to-br from-gray-1000 via-gray-1100 to-gray-1100 rounded-3xl my-9 z-10 shadow-md border border-white border-opacity-5">
          <div className="grid grid-rows-8 macOld:gird-rows-4 1080p:gap-y-2 macAir:gap-y-14 macOld:gap-y-20 4k:gap-y-28 1080p:grid-rows-8 1080p:mx-6 4k:mx-12">
            <div className="flex pl-4 pt-3 1080p:pt-12 1080p:pb-8 1080p:px-10">
              <img className="animate-pulse w-20 1080p:w-28 self-start macOld:w-32 macNew:w-40 4k:w-56" src="/Favicon.png" alt="Touch Speed Logo" />
              <div className="flex-1 self-center text-center text-gray-100 macAir:-ml-16 macAir:text-6xl -ml-4 font-thin text-5xl 1080p:pr-20 1080p:text-6xl macOld:text-8xl 4k:text-9xl">Touch Speed</div>
            </div>
            <Preview text={state.text} userInput={state.userInput} />
            <textarea
              id="text"
              autoFocus
              value={state.userInput}
              onChange={event => setState({ ...state, userInput: event.target.value, symbols: correctCount(event.target.value), started: true, finished: isDone(event.target.value) })}
              className="rounded focus:outline-none 4k:h-144 macAir:text-xl macAir:h-52 shadow-inner m-4 p-4 4k:text-6xl 4k:pb-32 1080p:h-72 macOld:h-80 macNew:h-96 1080p:text-3xl h-44 1080p:mb-8 1080p:rounded-2xl 4k:rounded-3xl macOld:text-4xl macOld:leading-normal 4k:leading-normal macNew:text-5xl"
              placeholder="A 60 second timer will start from the time you start typing..."
              readOnly={state.finished || state.sec >= 60}
            >
            </textarea>
            <div className="flex justify-between 4k:px-10 px-6 m-3">
              <button className="text-white font-medium tracking-wide border 1080p:text-3xl macNew:text-4xl macNew:w-64 macNew:p-4 4k:text-5xl 4k:w-96 border-transparent rounded-lg 4k:py-5 4k:rounded-xl 1080p:w-52 w-32 p-2 bg-blue-900 shadow-lg transition duration-300 hover:bg-purple-500 focus:outline-none" onClick={() => window.location.reload()}>New Prompt</button>
              <Speed sec={state.sec} symbols={state.symbols} text={state.text} input={state.userInput} />
              <button className="text-white font-medium tracking-wide 1080p:text-3xl macNew:text-4xl macNew:w-64 macNew:p-4  border 4k:text-5xl 4k:w-96 border-transparent rounded-lg 4k:py-5 4k:rounded-xl 1080p:w-52 w-32 p-2 bg-blue-900 shadow-lg transition duration-300 hover:bg-purple-500 focus:outline-none" onClick={() => refresh()}>Restart</button>
            </div>
          </div>
        </div>
        <Leaderboard />
      </div>
    </div>

  );
}

export default App;
