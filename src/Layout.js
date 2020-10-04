import React from 'react';
import Product from './Product';
import netflix from './assets/netflix.png';
import amazon from './assets/amazon.png';
import meekd from './assets/meekd.png';
import spotify from './assets/spotify.png';
import unsplash from './assets/unsplash.png';
import covid from './assets/covid.png';



import './Layout.css';

function Layout() {

	 const callNetflix = () => {
     window.open("https://netflix-clone-da152.web.app/")
  }
   const callMeekd = () => {
     window.open("https://meekd.com/")
  }
   const callCovid = () => {
     window.open("https://covid-tracker-18bbf.web.app/")
  }
    return (
    	<div>
    	 <div onClick={callMeekd}>
			    <Product
			 	id="1245"
			 	title="Meekd - an independent search engine"
			 	image={meekd}
			   />
			  </div>
    	<div onClick={callNetflix}>
			 <Product
			 	id="1245"
			 	title="Amazon clone"
			 	image={netflix}
			   />
			</div>
			<div onClick={callCovid}>
			    <Product
			 	id="1245"
			 	title="Real time data for covid-19 cases world wide"
			 	image={covid}
			   />
			  </div>
			<div onClick={callNetflix}>
			    <Product
			 	id="1245"
			 	title="Spotify clone"
			 	image={spotify}
			   />
			  </div>
			  <div onClick={callNetflix}>
			    <Product
			 	id="1245"
			 	title="Amazon clone"
			 	image={amazon}
			   />
			  </div>
			  <div onClick={callNetflix}>
			    <Product
			 	id="1245"
			 	title="unsplash"
			 	image={unsplash}
			   />
			  </div>
			  
			</div>
    )
}

export default Layout;
