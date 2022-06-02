import {useEffect} from 'react';

function useLoading() {
    function authenticate() {
      return new Promise(resolve => setTimeout(resolve, 4800))
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
        }, 300)
        }
        })
      }, [])
}

export {useLoading};
