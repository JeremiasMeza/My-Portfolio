import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50'>
            <nav className='max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white'>
                <a
                    href="#about"
                    className='text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300'
                >
                    Jeremias Meza
                </a>
                <ul className='hidden md:flex gap-10'>
                    <li className='opacity-70 hover:opacity-100 transition-opacity'>
                        <a href="#about">Acerca de</a>
                    </li>
                    <li className='opacity-70 hover:opacity-100 transition-opacity'>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className='opacity-70 hover:opacity-100 transition-opacity'>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
                <button
                    className='md:hidden'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <BiMenu className='text-3xl' />
                </button>

                {showMenu && (
                    <ul className='md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b space-y-5 border-gray-800 py-16 text-center'>
                        <li className='group px-10 opacity-80 hover:opacity-100 transition-opacity'>
                            <a href="#about" onClick={() => setShowMenu(false)}>
                                <span className='text-lg'>Acerca de</span>
                            </a>
                        </li>
                        <li className='group px-10 opacity-80 hover:opacity-100 transition-opacity'>
                            <a href="#projects" onClick={() => setShowMenu(false)}>
                                <span className='text-lg'>Proyectos</span>
                            </a>
                        </li>
                        <li className='group px-10 opacity-80 hover:opacity-100 transition-opacity'>
                            <a href="#contact" onClick={() => setShowMenu(false)}>
                                <span className='text-lg'>Contacto</span>
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Navbar;