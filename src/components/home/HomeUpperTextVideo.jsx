import React from 'react'

const HomeUpperTextVideo = () => {
    return (
        <div>
            <div className="relative h-[7vw] w-[18vw] rounded-[3vw] overflow-hidden">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/videos/project-video.mp4"
                />
            </div>

        </div>
    )
}

export default HomeUpperTextVideo