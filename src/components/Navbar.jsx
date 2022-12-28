import React, { useState } from 'react';

// React animations scroll
import { Link, animateScroll as scroll } from 'react-scroll';

// Import icons
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<nav className=' w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
			<div className='px-2 flex justify-between items-center w-full h-full '>
				<div className='flex items-center'>
					<h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
					<ul className='hidden md:flex'>
						<li>
							<Link activeClass='active' to='home' smooth={true} duration={500}>
								Home
							</Link>
						</li>
						<li>
							<Link activeClass='active' to='about' smooth={true} offset={-160} duration={500}>
								About
							</Link>
						</li>
						<li>
							<Link activeClass='active' to='support' smooth={true} offset={-50} duration={500}>
								Support
							</Link>
						</li>
						<li>
							<Link activeClass='active' to='platforms' smooth={true} offset={-150} duration={500}>
								Platforms
							</Link>
						</li>
						<li>
							<Link activeClass='active' to='pricing' smooth={true} offset={20} duration={500}>
								Pricing
							</Link>
						</li>
					</ul>
				</div>
				<div className='hidden md:flex pr-4'>
					<button className='border-none bg-transparent text-black mr-4'>Sign In</button>
					<button className='px-8 py-3'>Sign Up</button>
				</div>
				<div className='md:hidden' onClick={handleClick}>
					{!nav ? <AiOutlineMenu className='w-6 h-6 cursor-pointer ' /> : <GrClose className='w-6 h-6 cursor-pointer ' />}
				</div>
			</div>

			<ul className={!nav ? 'hidden' : 'bg-zinc-200 absolute w-full px-8  '}>
				<li className='border-b-2 border-zinc-300 w-full'>
					<Link onClick={handleClick} activeClass='active' to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='border-b-2 border-zinc-300 w-full'>
					<Link onClick={handleClick} activeClass='active' to='about' smooth={true} offset={-100} duration={500}>
						About
					</Link>
				</li>
				<li className='border-b-2 border-zinc-300 w-full'>
					<Link onClick={handleClick} activeClass='active' to='support' smooth={true} offset={-50} duration={500}>
						Support
					</Link>
				</li>
				<li className='border-b-2 border-zinc-300 w-full'>
					<Link onClick={handleClick} activeClass='active' to='platforms' smooth={true} offset={-150} duration={500}>
						Platforms
					</Link>
				</li>
				<li className='border-b-2 border-zinc-300 w-full'>
					<Link onClick={handleClick} activeClass='active' to='pricing' smooth={true} offset={20} duration={500}>
						Pricing
					</Link>
				</li>

				<div className='flex flex-col my-4'>
					<button className='bg-transparent border border-indigo-600 text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
					<button className='px-8 py-3'>Sign Up</button>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
