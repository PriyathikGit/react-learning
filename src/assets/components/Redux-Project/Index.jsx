import React from 'react'
import AddTodos from './AddTodo'
import Todos from './Todos'
import { Provider } from 'react-redux'
import Store from "../../../app/Store"

const Index = () => {
  return (
    <Provider store={Store}>
    <div className='bg-gray-500 h-screen'>
    <h1 className='text-center'>Redux Toolkit</h1>
    <AddTodos/>
    <Todos/>
    </div>
    </Provider>
  )
}

export default Index