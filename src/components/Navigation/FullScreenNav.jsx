import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext } from 'react';
import { NavContext } from '../../context/NavbarContext';
import { Link } from 'react-router-dom';
const FullScreenNav = () => {
    const [navOpen, setnavopen] = useContext(NavContext)
    useGSAP(() => {
        if (navOpen) {
            document.querySelector('.linkParent').style.display = 'block'
            document.body.style.overflow = "hidden";
            gsap.set('.crossDiv', { xPercent: 100, opacity: 0 })
            gsap.to('.crossDiv', {
                xPercent: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.inOut'
            })
            // make nav visible
            gsap.set(".fullNav", { display: "block" });

            // reset stairs
            gsap.set(".stairing", { height: "0%" });

            // animate stairs growing down one by one
            gsap.to(".stairing", {
                height: "100vh",
                duration: 0.6,
                ease: "power3.out",
                stagger: {
                    amount: 0.25,   // each stair waits 0.25s before next starts
                    from: "end"  // start from rightmost element
                }
            });

            // animate links after stairs
            gsap.from(".link", {
                opacity: 0,
                rotateX: 90,
                stagger: 0.1,
                delay: 0.1
            });
        } else {
            document.body.style.overflow = "auto";
            gsap.to(".crossDiv", {
                xPercent: 100,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in"
            });
            // close animation
            gsap.to(".stairing", {
                height: "0%",
                duration: 0.5,
                ease: "power3.in",
                stagger: {
                    amount: 0.2,
                    from: "end"
                },
                onComplete: () => gsap.set(".fullNav", { display: "none" })
            });
        }
    }, [navOpen]);



    return (

        <div className='fullNav hidden z-50 text-white h-screen w-full fixed font-[font2] overflow-hidden'>


            <div

                className="h-screen w-full fixed "
            >
                <div className="h-full w-full flex ">
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                </div>
            </div>

            <div className='relative'>
                <div className='w-full lg:p-2 p-1 bg white flex justify-between absolute '>
                    <Link to='/' onClick={() => {
                        setnavopen(false)
                        document.querySelector('.linkParent').style.display = 'none'

                    }} className='ky2 py-1'>
                        <div className=' w-29'>
                            <svg className='lg:h-full h-11 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </Link>
                    <div onClick={() => {
                        setnavopen(false)
                        document.querySelector('.linkParent').style.display = 'none'

                    }} className='crossDiv lg:h-28  lg:w-28 h-20 w-20 relative cursor-pointer m-1'>
                        <div className='menuCross lg:h-38 lg:w-[2px] h-28 w-[2px]  bg-white absolute -rotate-45 origin-top'></div>
                        <div className='menuCross lg:h-38 lg:w-[2px] h-28 w-[2px] bg-white absolute right-0 rotate-45 origin-top'></div>
                    </div>
                </div>
                <div className='linkParent lg:py-35 z-102 pt-50'>
                    <div className='link origin-top relative border-t-[0.5px] text-center '>
                        <h1 className=' lg:text-[8vw] text-[14vw] uppercase lg:leading-[6vw] leading-2 lg:pt-5  
                         pt-5 lg:pb-0 pb-4 border-white'>Projets</h1>
                        <Link
                            onClick={() => {
                                setnavopen(false)
                                document.querySelector('.linkParent').style.backgroundColor = '#0000001A';


                            }}
                            to='/projects' className='moveLink absolute flex top-0 bg-[#d3fd50] lg:gap-0 gap-27 text-black pt-2 sm:h-[12.1vw] h-[14vw] lg:h-[7.3vw]'>
                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />

                            </div>
                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />

                            </div>

                        </Link>
                    </div>
                    <div className='link origin-top relative border-t-[0.5px] text-center '>
                        <h1 className=' lg:text-[8vw] text-[14vw] uppercase lg:leading-[6vw] leading-2 lg:pt-5  
   pt-5 lg:pb-0 pb-4 border-white'>Agence</h1>
                        <Link to='/agence' onClick={() => {
                            setnavopen(false)
                            document.querySelector('.linkParent').style.display = 'none'
                        }} className='moveLink absolute flex top-0 bg-[#d3fd50] lg:gap-0 gap-27 text-black pt-2 sm:h-[12.1vw] h-[14vw] lg:h-[7.3vw]'>

                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>
                                    Pour tout savoir
                                </h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2'
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>
                                    Pour tout savoir
                                </h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2'
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="img" />
                            </div>

                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>
                                    Pour tout savoir
                                </h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2'
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>
                                    Pour tout savoir
                                </h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2'
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="img" />
                            </div>

                        </Link>
                    </div>

                    <div className='link origin-top relative border-t-[0.5px] text-center '>
                        <h1 className=' lg:text-[8vw] text-[14vw] uppercase lg:leading-[6vw] leading-2 lg:pt-5  
                         pt-5 lg:pb-0 pb-4 border-white'>Developing</h1>
                        <div className='moveLink absolute flex top-0 bg-[#d3fd50] lg:gap-0 gap-27 text-black pt-2 sm:h-[12.1vw] h-[14vw] lg:h-[7.3vw]'>
                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />

                            </div>
                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />

                            </div>

                        </div>
                    </div>
                    <div className='link origin-top relative border-y-[0.5px] text-center '>
                        <h1 className=' lg:text-[8vw] text-[14vw] uppercase lg:leading-[6vw] leading-2 lg:pt-5  
                         pt-5 lg:pb-0 pb-4 border-white'>Developing</h1>
                        <div className='moveLink absolute flex top-0 bg-[#d3fd50] lg:gap-0 gap-27 text-black pt-2 sm:h-[12.1vw] h-[14vw] lg:h-[7.3vw]'>
                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />

                            </div>
                            <div className='movex flex flex-nowrap items-center justify-center'>
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />
                                <h2 className=' whitespace-nowrap text-[14vw]  lg:text-[8vw]  uppercase lg:leading-[0.1] lg:pt-5 border-white'>Pour tout vior</h2>
                                <img className='h-8 lg:h-20 lg:w-50 object-cover rounded-full shrink-0 pb-2' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="img" />

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FullScreenNav