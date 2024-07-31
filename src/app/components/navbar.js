'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const router = useRouter()

  return (
   
      <div className=" container-fluid mx-auto py-1 bg-white">
        <div className='bg-primary hidden md:flex items-center justify-between px-5 lg:px-20 py-1 w-full z-10'>
          <p className='text-sm text-white'>chat@marlinspecter.com</p>
          <a href="https://www.linkedin.com/company/marlinspecter-isystems" target="blank" aria-label="visit our linkedin page">
          <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_68)">
              <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_17_68">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </a>

        </div>
       
        <div className='flex items-center justify-between lg:shadow-lg lg:rounded-lg lg:bg-white  px-5  mx-auto z-10 fixed top-10 left-1/2 transform -translate-x-1/2 w-full'> 
        <div className="logo"> 
          <a href="/" className="nav-logo">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </a>
        </div>
        <div className={isOpen ? 'active links flex flex-col lg:flex-row items-center justify-between' : 'hide links flex-col lg:flex-row items-start'}>
          <div className="cancel">
            <span
              className={isOpen ? 'cancel-btn active' : 'cancel-btn hide'}
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>

          <a href="/#about">About Us</a>        
          <a href="/#usecase">Use Cases</a>
          <a href="/#products">Products &amp; Services</a>

          <a href="/#whyus">Why Us</a>
          <a href="/#whyus">Get Involved</a>
          
          <button
          onClick={()=>{router.push('https://calendly.com/brykimatia/30min')}}
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple"
          >
            Contact Us
          </button>

        </div>
        <div className="menu-bar">
          <span className={isOpen ? 'hide text-white' : ' active'} onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
        </div>
      
      </div>
    
  )
}

export default Navbar
