import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="md:pt-60 p-15 w-full absolute text-white bg-gradient-to-r from-black pt-[37%] h-[128vh]">  
        <h1 className="font-extrabold text-2xl md:text-5xl">{title}</h1>
        <p className="hidden md:inline-block mt-4 w-6/12">{overview}</p>
        <div className="mt-3">
            <button className="px-6 py-2 mr-4 bg-black rounded-[5px] text-white font-semibold cursor-pointer hover:opacity-60">▷ Play</button>
            <button className="hidden md:inline-block px-6 py-2 mr-4 bg-gray-500 hover:opacity-85 rounded-[5px] text-white font-semibold cursor-pointer">● More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle