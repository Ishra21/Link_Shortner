import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import LinkContainer from './Components/LinkContainer'
import { LinkProvider } from './Context/LinkContext'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <LinkProvider>
      <Navbar />
      <div className='min-h-screen py-36 bg-slate-900 flex  flex-col space-y-10 items-center justify-center'>
        <Form/>
      <LinkContainer/>
    </div>
    <ToastContainer/>
    </LinkProvider>
  )
}

export default App