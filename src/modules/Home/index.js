import React from 'react'

const Home = () => {
  return (
    <div className='h-screen bg-[#7f989f] flex overflow-hidden'>
    <div className='w-[20%] bg-black flex flex-col'>
        <div className='h-[30%] bg-blue-200 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
             
            </div>

        </div>

        <div className='h-[60%] bg-blue-300'></div>
        <div className='h-[10%] bg-blue-400'></div>
    </div>

    <div className='w-[60%] overflow-scroll n-full scrollbar-hide'>
    <div className='h-[1500px]'>Divyansh <br /> is <br />good <br /> person <br /> he <br /> study <br /></div>
    </div>
    <div className='w-[20%] bg-slate-500'></div>
   
    </div>
  )
}

export default Home
