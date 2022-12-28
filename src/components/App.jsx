import { Fragment } from 'react';

// Import App css file
import './App.css';

// Import all of components
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Support from './Support';
import AllInOne from './AllInOne';
import Pricing from './Pricing';
import Footer from './Footer';

function App() {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<About />
			<Support />
			<AllInOne />
			<Pricing />
			<Footer />
		</Fragment>
	);
}

export default App;
