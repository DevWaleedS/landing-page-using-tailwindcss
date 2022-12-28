import React from 'react';

const About = () => {
	return (
		<section name='about' className='w-full my-32'>
			<div className='max-w-[1240px] m-auto'>
				<div className='text-center'>
					<h2 className='text-5xl font-bold '>Trusted by developers across the world</h2>
					<p className='py-6 text-3xl  text-gray-600  md:max-w-[760px] m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptas ipsam beatae autem rem ullam?</p>
				</div>

				<div className='grid md:grid-cols-3 gap-4 px-2 text-center'>
					<div className='border py-8 rounded-xl shadow-md '>
						<p className='text-6xl font-bold text-indigo-600'>100%</p>
						<p className='mt-2 text-gray-400'>Completion</p>
					</div>

					<div className='border py-8 rounded-xl shadow-md '>
						<p className='text-6xl font-bold text-indigo-600'>24/7</p>
						<p className='mt-2 text-gray-400'>Delivery</p>
					</div>

					<div className='border py-8 rounded-xl shadow-md '>
						<p className='text-6xl font-bold text-indigo-600'>100k</p>
						<p className='mt-2 text-gray-400'>Transactions</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
