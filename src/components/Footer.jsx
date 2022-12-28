import React from 'react';

// Import Icons
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='w-full bg-slate-900 text-gray-300 py-8 px-2'>
			<div className='max-w-[1240px] m-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
				<div>
					<h6 className='font-bold uppercase py-2'>Solutions</h6>
					<ul>
						<li className='py-1 px-0'>Marketing</li>
						<li className='py-1 px-0'>Analytics</li>
						<li className='py-1 px-0'>Commerce</li>
						<li className='py-1 px-0'>Data</li>
						<li className='py-1 px-0'>Cloud</li>
					</ul>
				</div>
				<div>
					<h6 className='font-bold uppercase py-2'>Support</h6>
					<ul>
						<li className='py-1 px-0'>Pricing</li>
						<li className='py-1 px-0'>Documentations</li>
						<li className='py-1 px-0'>Guides</li>
						<li className='py-1 px-0'>API Status</li>
					</ul>
				</div>
				<div>
					<h6 className='font-bold uppercase py-2'>Company</h6>
					<ul>
						<li className='py-1 px-0'>About</li>
						<li className='py-1 px-0'>Blogs</li>
						<li className='py-1 px-0'>Jobs</li>
						<li className='py-1 px-0'>Press</li>
						<li className='py-1 px-0'>Partners</li>
					</ul>
				</div>
				<div>
					<h6 className='font-bold uppercase py-2'>Legal</h6>
					<ul>
						<li className='py-1  px-0'>Claims</li>
						<li className='py-1 px-0'>Privacy</li>
						<li className='py-1 px-0'>Terms</li>
						<li className='py-1 px-0'>Policies</li>
						<li className='py-1 px-0'>Conditions</li>
					</ul>
				</div>
				<div className='col-span-2 pt-8 md:pt-2'>
					<p className='uppercase font-bold'>Subscribe to our newsletter</p>
					<p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
					<form className='flex flex-col md:flex-row '>
						<input
							className='w-full p-2 mr-4 rounded-md mb-4 placeholder-slate-400 border-slate-200  focus:outline-none text-slate-500'
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email'
						/>
						<button className='p-2 mb-4'>Subscribe</button>
					</form>
				</div>
			</div>

			<div className='flex sm:flex-row flex-col justify-between max-w-[1240px] m-auto text-center text-gray-500 px-2 py-4 '>
				<p>
					2023{' '}
					<a className='text-indigo-600 hover:text-white ml-1' href='https://devwaleeds.github.io/portfolio/'>
						Waleed Salah
					</a>
					, All right reserved
				</p>

				<div className='flex sm:justify-end justify-center mt-1 gap-2 sm:w-[300px] text-2xl'>
					<FaFacebook className='w-6 h-6 hover:text-white  cursor-pointer' />
					<FaGithub className='w-6 h-6 hover:text-white  cursor-pointer' />
					<FaInstagram className='w-6 h-6 hover:text-white  cursor-pointer' />
					<FaTwitch className='w-6 h-6 hover:text-white  cursor-pointer' />
					<FaTwitter className='w-6 h-6 hover:text-white  cursor-pointer' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
