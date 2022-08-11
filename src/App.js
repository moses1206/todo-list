import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  }

  getStyle = () => {
    return { padding: '10px', borderBottom: '1px #ccc dotted' }
  }

  todoData = [
    {
      id: '1',
      title: '공부하기',
      completed: true,
    },
    {
      id: '2',
      title: '청소하기',
      completed: false,
    },
  ]

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div>
            <h1>할일목록</h1>
          </div>

          {this.todoData.map((item) => {
            return (
              <div key={item.id} style={this.getStyle()}>
                <input type='checkbox' defaultChecked={false} /> {item.title}
                <button style={this.btnStyle}>x</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
