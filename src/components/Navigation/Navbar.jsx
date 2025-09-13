import React, { useContext } from 'react'
import { useRef } from 'react'
import { NavContext } from '../../context/NavbarContext'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
    let color;
    if (location.pathname == '/agence') {
        color = 'black';
    } else if (location.pathname == '/projects') {
        color = 'black';
    }
    else {
        color = 'white'
    }
    const makeGreen = useRef(null)
    const [navOpen, setnavopen] = useContext(NavContext)
    return (
        <div className=' w-full flex fixed top-0 left-0  items-start justify-between z-40'>
            <Link to="/" className='lg:p-2.5 p-2'>
                <div className=' lg:w-29 w-26'>
                    <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill={color} fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </Link>
            <div onClick={() => {
                setnavopen(true)
            }} onMouseEnter={() => {
                makeGreen.current.style.height = '100%'


            }} onMouseLeave={() => {
                makeGreen.current.style.height = '0%'
            }} className='menu relative lg:h-12 h-11 lg:w-[16vw] w-[50%] md:w-[35vw]'>
                <div className=' bg-black flex flex-col items-end justify-center gap-1 h-full w-full px-5'>
                    <div className='menuIcons h-[1px] w-12 bg-white z-30'></div>
                    <div className='menuIcons h-[1px] w-6 bg-white z-30'></div>

                </div>
                <div ref={makeGreen} className=' bg-[#d3fd50] transition-all  w-full absolute h-0 top-0'></div>

            </div>
        </div>
    )
}

export default Navbar