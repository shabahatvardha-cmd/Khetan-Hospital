import React, { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mainNavigation } from '../data/navigationData';

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = mainNavigation.length; // 6 cards
  
  // Center card index on homepage (0 to 5)
  const [activeIndex, setActiveIndexState] = useState(0);

  // Robust circular modulo helper: always returns [0, total - 1]
  const wrapIndex = (idx) => ((idx % total) + total) % total;

  const setActiveIndex = (idx) => {
    setActiveIndexState(wrapIndex(idx));
  };

  // Derive active section id based on route or carousel position
  const isHomePage = location.pathname === '/';

  const getRouteSectionId = (pathname) => {
    if (pathname.startsWith('/services')) return 'services';
    if (pathname.startsWith('/about') || pathname === '/timeline' || pathname === '/published-papers') return 'doctors';
    if (pathname.startsWith('/blogs')) return 'blogs';
    if (pathname.startsWith('/locations')) return 'locations';
    if (pathname.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const activeSectionId = isHomePage 
    ? (mainNavigation[activeIndex]?.id || 'home')
    : getRouteSectionId(location.pathname);

  // Synchronized navigation trigger (circular index support)
  const goToSection = (sectionIdOrIndex) => {
    let targetIndex = -1;
    let targetItem = null;

    if (typeof sectionIdOrIndex === 'number') {
      targetIndex = wrapIndex(sectionIdOrIndex);
      targetItem = mainNavigation[targetIndex];
    } else {
      targetIndex = mainNavigation.findIndex(item => item.id === sectionIdOrIndex);
      targetItem = mainNavigation[targetIndex];
    }

    if (!targetItem) return;

    if (isHomePage) {
      // On homepage: Move carousel continuously to target card & highlight in navbar
      setActiveIndex(targetIndex);
    } else {
      // On inner page: Navigate to target section
      if (targetItem.id === 'home') {
        setActiveIndex(0);
        navigate('/');
      } else {
        navigate(targetItem.route);
      }
    }
  };

  // When a card is clicked
  const handleCardClick = (index) => {
    const normIndex = wrapIndex(index);
    if (normIndex === activeIndex) {
      // Center card clicked -> Navigate to section
      const item = mainNavigation[normIndex];
      if (item && item.route && item.route !== '/') {
        navigate(item.route);
      }
    } else {
      // Side card clicked -> Center it smoothly
      setActiveIndex(normIndex);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        activeSectionId,
        isHomePage,
        mainNavigation,
        goToSection,
        handleCardClick
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

