import React, { useState } from 'react'

function Navbar() {

  const [menuButton, setMenuButton] = useState(false)

  const navLinks = [
    {link : "Invest", href : "/invest"},
    {link : "Spend & Save", href : "/spend"},
    {link : "Tax", href : "/tax"},
    {link : "Learn", href : "/learn"}
  ]

  return (
    <header className="text-gray-600 body-font bg-indigo-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    
            <div className='flex justify-between w-full md:w-fit'>
                <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Navbar</span>
                </a>

                <button onClick={()=>{ setMenuButton(!menuButton) }} className="inline-flex items-center md:hidden bg-indigo-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-justify w-6" viewBox="0 0 16 16"> 
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/> 
                    </svg>
                </button>
            </div>
            
            <nav className={`${menuButton ? 'flex' : 'hidden' } md:ml-auto md:flex md:flex-row flex-col items-center text-base justify-center space-y-4 mt-4 md:space-y-0 md:mt-0`}>
                {
                    navLinks.map(element => 
                        <a href={element.href} key={element.link} className="mr-5 hover:text-gray-900">{element.link}</a>
                    )
                }
            </nav>

        </div>
    </header>
  )
}

export default Navbar