import React from 'react';

// Import ICONS and Images
import bgImage from '../assets/cyber-bg.png';

import { BsCloudArrowUp } from 'react-icons/bs';
import { CgDatabase } from 'react-icons/cg';
import { FiDatabase } from 'react-icons/fi';
import { HiPaperAirplane } from 'react-icons/hi';

const Hero = () => {
	return (
		<header name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
			<div className='grid md:grid-cols-2 max-w-[1240px] m-auto py-20'>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
					<p className='text-2xl'>Unique Sequences & Productions</p>
					<h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
					<p className='text-2xl'>This is our Tech brand.</p>
					<button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
				</div>
				<div>
					<img className='w-full' src={bgImage} alt='bgImage' />
				</div>
				<div
					className='
                        absolute
                        flex 
                        flex-col 
                        py-8 
                        md:min-w-[760px]
                        bottom-[-5%]
												mx-1
                        md:left-0 
                        transform
                        md:translate-x-1/2
                      bg-zinc-200 
                        border 
                        border-slate-300
                        rounded-xl 
                        text-center 
                        shadow-xl'
				>
					<p className='text-xl mb-4'>Data Services</p>
					<div className='flex justify-between flex-wrap px-4'>
						<p className='flex items-center gap-1  px-4 py-2 text-slate-500'>
							<BsCloudArrowUp className='h-6 w-6 text-indigo-600' />
							App Security
						</p>
						<p className='flex items-center gap-1 px-4 py-2 text-slate-500'>
							<FiDatabase className='h-6 w-6 text-indigo-600' />
							Dashboard Design
						</p>
						<p className='flex items-center gap-1  px-4 py-2 text-slate-500'>
							<CgDatabase className='h-6 w-6 text-indigo-600' />
							Cloud Data
						</p>
						<p className='flex items-center gap-1  px-4 py-2 text-slate-500'>
							<HiPaperAirplane className='h-6 w-6 text-indigo-600' />
							API
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
