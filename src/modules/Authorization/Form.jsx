import React, { useState } from 'react'
import Button from '../../myComponent/button'
import Input from '../../myComponent/input'

const Form = () => {
  const [isSignInPage,setIsSignInPage]=useState(true)
  return (
    <div className='bg-[#e7f9fe] h-screen w-full flex justify-center items-center'>
        <div className='h-[400px] w-[600px] bg-white flex justify-center items-center'>
          <div className={`border h-full w-full flex flex-col justify-center items-center bg-[#4f7397] ${!isSignInPage && 'order-2'}`}>
                
                <div className='-apple-system '>WELCOME{isSignInPage && ' BACK'}</div>
                <div className='-apple-system '>PlEASE {isSignInPage? 'LOGIN ':'REGISTER '}TO CONTINUE</div>
                <form>
                  {
                    !isSignInPage && 
                    <Input type='text' label='Username' placeholder='Enter your username' name='Username'/>
                  }
                  <Input type='email' name='Email' placeholder='Enter your email' label='Email'/>
                  <Input type='password' name='Password' placeholder='Enter your password' label='Password'/>
                  <Button label={isSignInPage?'Sign in':'Register'} />
                </form>
                <div className='cursor-pointer' onClick={()=>setIsSignInPage(!isSignInPage)}>{isSignInPage?"Don't have an account? Sign up":'Have an account? Log in'}</div>
          </div>
          <div className={`border h-full w-full flex justify-center bg-gray-400 ${!isSignInPage && 'order-1'}`}>
          <img src="https://c.tenor.com/y76xw2cQA3kAAAAC/welcome-door-open.gif" alt="welcome" />
          </div>
        </div>
    </div>
  )
}

export default Form
