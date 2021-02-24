import React, { useState } from 'react'

export function Calculator() {
  const [number, setNumber] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <main>
      <div className="calculator">
        <div className="display">{number}</div>
        <div className="buttons">
          <button
            className="button fn"
            onClick={function () {
              setNumber(0)
              setFirstNumber(0)
              setSecondNumber(0)
              setTotal(0)
            }}
          >
            AC
          </button>
          <button
            className="button fn"
            onClick={function () {
              setNumber(number * -1)
            }}
          >
            &plusmn;
          </button>
          <button
            className="button fn"
            onClick={function () {
              setNumber(number / 100)
            }}
          >
            %
          </button>
          <button
            className="button op"
            onClick={function () {
              setFirstNumber(number)
              setNumber(0)
            }}
          >
            &divide;
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '7')
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '8')
            }}
          >
            8
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '9')
            }}
          >
            9
          </button>
          <button
            className="button op"
            onClick={function () {
              setFirstNumber(number)
              setNumber(0)
            }}
          >
            &times;
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '4')
            }}
          >
            4
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '5')
            }}
          >
            5
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '6')
            }}
          >
            6
          </button>
          <button
            className="button op"
            onClick={function () {
              setFirstNumber(number)
              setNumber(0)
            }}
          >
            &minus;
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '1')
            }}
          >
            1
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '2')
            }}
          >
            2
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '3')
            }}
          >
            3
          </button>
          <button
            className="add button op"
            onClick={function () {
              setFirstNumber(number)
              setNumber(0)
            }}
          >
            +
          </button>
          <button
            className="button x2"
            onClick={function () {
              setNumber(number + '0')
            }}
          >
            0
          </button>
          <button className="button">.</button>
          <button
            className="button op"
            onClick={function () {
              setSecondNumber(number)
              if ('/') {
                setTotal(firstNumber / secondNumber)
              }
              if ('*') {
                setTotal(firstNumber * secondNumber)
              }
              if ('add') {
                setTotal(firstNumber + secondNumber)
              }
              if ('-') {
                setTotal(firstNumber - secondNumber)
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </main>
  )
}
