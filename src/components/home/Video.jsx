import React from 'react'

const Video = () => {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="/videos/project-video.mp4"
    />
  )
}

export default Video
