import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function HiddenSearchBar() {
  const [uiPros, setUiPros] = useState({
    bg: 'purple',
    shadow: '',
    transitions: 'all .3s ease',
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: 'white',
  });

  let body = document.body.style;

  let inputStyle = {
    margin: '10vh 25vw',
    width: '20vh',
    height: '30px',
    padding: '1rem .3rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    borderBottom: `1px solid ${uiPros.borderBottomColor}`,
    fontSize: '1.3rem',
    color: '#eee',
    boxShadow: '0px 55px 60px -15px rbga(0, 0, 0, 0.75)',
    opacity: 0.9,
    transition: 'all .3s ease',
  };

  let bsSearchStyle = {
    color: 'white',
    fontSize: 50,
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20,
  };

  const inputEl = useRef(null);

  useEffect(() => {
    body.background = uiPros.bg;
    body.boxShadow = uiPros.shadow;
    body.transition = uiPros.transitions;
    uiPros.showSearchBar && inputEl.current.focus();
  }, [uiPros.shadow], [uiPros.showSearchBar]);

  const showSeach = () => {
    setUiPros({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    });
  };

  const handleSearchFocus = () => {
    setUiPros({
      shadow: 'inset 0 -60vh 30 vw 200px rgba(0, 0, 0, 0.8)',
      borderBottomColor: 'black',
    });
  };

  const handleSearchBlur = () => {
      setUiPros({
        shadow: 'none',
        opacity: 0,
        borderBottomColor: '#fff',
        showSearchIcon: true,
      })
  }

  return (
    <div className='container' style={{height: '100vh'}}>
      {uiPros.showSearchIcon ? (
        <BsSearch
          style={bsSearchStyle}
          onClick={showSeach}
        />
      ) : (<input
      type='text'
      placeholder='Search'
      style={inputStyle}
      onFocus={handleSearchFocus}
      onBlur={handleSearchBlur}
      ref={inputEl}
    />)}
    </div>
  );
}
