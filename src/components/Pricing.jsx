import React from 'react';

// Import icons
import { HiOutlineCheck } from 'react-icons/hi';

const Pricing = () => {
	return (
		<section name='pricing' className='w-full text-white py-24'>
			<div className='absolute w-full h-[800px] bg-slate-900 mix-blend-overlay'></div>

			<div className='max-w-[1240px] m-auto px-2 py-12'>
				<div className='text-center text-slate-300 py-8 '>
					<h2 className='uppercase text-3xl'>Pricing</h2>
					<h3 className='text-5xl font-bold text-white py-8 '>The Price for your research.</h3>
					<p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam quis ratione exercitationem! Saepe corrupti quia non necessitatibus officia itaque cupiditat.</p>
				</div>

				<div className=' grid md:grid-cols-2'>
					<div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
						<span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-600 rounded-xl text-sm'>Standard</span>
						<div>
							<p className='flex text-6xl font-bold py-4'>
								$49<span className='flex flex-col justify-end text-xl text-slate-500'>/mo</span>
							</p>
						</div>
						<p className='py-8 text-2xl text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						<div className='text-2xl '>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>

							<button className='w-full py-4 my-4'>Get Started </button>
						</div>
					</div>

					<div className='bg-white text-slate-900  m-4 p-8 rounded-xl shadow-2xl relative'>
						<span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-600 rounded-xl text-sm'>Premium</span>
						<div>
							<p className='flex text-6xl font-bold py-4'>
								$99<span className='flex flex-col justify-end text-xl text-slate-500'>/mo</span>
							</p>
						</div>
						<p className='py-8 text-2xl text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						<div className='text-2xl '>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>
							<p className='flex py-4'>
								<HiOutlineCheck className='w-7 h-7 text-green-600 mr-2' /> Lorem, ipsum dolor.
							</p>

							<button className='w-full py-4 my-4'>Get Started </button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
