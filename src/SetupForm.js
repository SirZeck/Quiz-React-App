import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Setup Trivia</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              className='form-input'
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='general'>General Knowledge</option>
              <option value='books'>Books</option>
              <option value='maths'>Mathematics</option>
              <option value='computers'>Computers</option>
              <option value='science'>Science & Nature</option>
              <option value='music'>Music</option>
              <option value='film'>Film</option>
              <option value='theatre'>Musicals & Theatres</option>
              <option value='sports'>Sports</option>
              <option value='anime'>Anime & Manga</option>
              <option value='video'>Video Games</option>
              <option value='history'>History</option>
              <option value='politics'>Politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>Difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            Start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
