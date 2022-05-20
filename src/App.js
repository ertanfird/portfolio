import React, {useState, useRef, useMemo, useEffect} from 'react';
import './styles/App.sass';

import NavBar from './components/UI/navigation/NavBar';
import Header from './components/Header';
import ScreenHome from './components/sections/Home/ScreenHome';
import ScreenSkills from './components/sections/Skills/ScreenSkills';
import ScreenProjects from './components/sections/Projects/ScreenProjects';
import ScreenPrice from './components/sections/Price/ScreenPrice';

function App() {

    function authenticate() {
      return new Promise(resolve => setTimeout(resolve, 4000))
    };

    useEffect(() => {
      authenticate().then(() => {
        const loader = document.getElementById('loader');
        const root = document.getElementById('root');
        if(loader){
          // fade out
          loader.classList.add('available');
          setTimeout(() => {
            // remove from DOM
            loader.outerHTML = '';
            root.classList.add('overflow');
          }, 280)
        }
        })
      }, [])


  const [section, setSection] = useState('');
  const refHome = React.createRef();
  const refSkills = React.createRef();
  const refProjects = React.createRef();
  const refPrice = React.createRef();
  const observer = useRef(null);
  const [long, setLong] = useState(' long');

  const callbackFunction = entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
          setSection(entry.target.id);
      }
      if (entry.target.id === 'Projects') {
          setLong('');
      } else {
          setLong(' long');
      }

  }

  const options = useMemo(() => {
      return {
          root: null,
          rootMargin: '200px',
          threshold: 0.9
      }
  }, []);

  let media = window.matchMedia('(min-width: 992px)').matches;

  useEffect(() => {
      observer.current = new IntersectionObserver(callbackFunction, options);
      observer.current.observe(refHome.current);
      observer.current.observe(refSkills.current);
      observer.current.observe(refProjects.current);
      observer.current.observe(refPrice.current);

  }, [options]);

  return(
      <div className="App">
          <Header section={section} />
          <NavBar long={long} media={media} />
          <ScreenHome ref={refHome} />
          <ScreenSkills ref={refSkills} />
          <ScreenProjects ref={refProjects} />
          <ScreenPrice ref={refPrice} />


      </div>
  )
};


export default App;
