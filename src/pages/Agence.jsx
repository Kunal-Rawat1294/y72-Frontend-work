import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
const Agence = () => {
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'

  ]

  const imageDivRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const imageRef = useRef(null)

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 15%',
        end: 'top -220%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[imageIndex];


        }
      }
    })
  })

  return (
    <div className='overflow-hidden'>
      <div className='section1  py-1'>
        <div ref={imageDivRef} className='absolute lg:h-[20vw] lg:w-[15vw] h-[30vw] w-[20vw] bg-white top-15 left-21  lg:top-40 lg:left-115 rounded-2xl  overflow-hidden'>
          <img ref={imageRef} className='object-cover'
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="img" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[25vh] '>
            <h1 className='lg:text-[20vw] text-[18vw] uppercase leading-[18vw] text-center '>
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className='flex justify-between flex-col gap-35'>
            <p className='lg:text-6xl lg:leading-4xl lg:mt-10 lg:pl-[40%] pt-25 text-[1.2rem] leading-tight p-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
            <div className='flex justify-between w-1/2 lg:pl-[10vw] pl-[5vw] font-[font2] text-[1.2rem]'>

              <p>Expertise</p>

              <p className='w-[10%]'>
                Stratégie
                Publicité
                Branding
                Design
                Contenu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2  lg:h-screen lg:w-screen flex lg:gap-20 lg:p-[10vw] font-[font2] text-[1.2rem] lg:flex-nowrap flex-wrap gap-6 pt-12 p-3 ">
        <div>
          Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.
        </div>
        <div>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</div>
        <div>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</div>
      </div>
    </div>
  )
}

export default Agence