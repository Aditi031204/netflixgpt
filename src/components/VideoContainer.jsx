import React from 'react'

const VideoContainer = ({title, overview}) => {
  return (
    <div className="pt-45 p-15">
        <h1 className="font-extrabold text-5xl">{title}</h1>
        <p className="mt-4 w-6/12">{overview}</p>
        <div className="mt-3">
            <button className="px-6 py-2 mr-4 bg-black rounded-[5px] text-white font-semibold cursor-pointer hover:opacity-70">▷ Play</button>
            <button className="px-6 py-2 mr-4 bg-gray-500 hover:opacity-85 rounded-[5px] text-white font-semibold cursor-pointer">● More Info</button>
        </div>
    </div>
  )
}

export default VideoContainer