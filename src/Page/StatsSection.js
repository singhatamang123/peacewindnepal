import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaUserFriends, FaClock, FaBriefcaseMedical, FaUsers } from 'react-icons/fa';
import './statssection.css';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const statsElements = document.querySelectorAll('.stat');

    const handleScroll = () => {
      statsElements.forEach((element) => {
        if (isInViewport(element)) {
          setInView(true);
        }
      });
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight - 50;
    };

    // Set visibility to true on component mount
    setInView(true);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { count: 35, label: 'Active Cases', icon: <FaUserFriends /> },
    { count: 12000000, label: 'People Joined', icon: <FaClock /> },
    { count: 200000000, label: 'Cases every Year', icon: <FaBriefcaseMedical /> },
    { count: 1200, label: 'People get help from us', icon: <FaUsers /> },
  ];

  return (
    <section className="stats-section">
      <IconContext.Provider value={{ size: '2em', style: { verticalAlign: 'middle', marginRight: '8px' } }}>
        {stats.map((stat, index) => (
          <div key={index} className={`stat ${inView ? 'visible' : ''}`}>
            {stat.icon}
            {inView && <CountUp start={0} end={stat.count} duration={2} separator="," className="count" />}
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </IconContext.Provider>
    </section>
  );
};

export default StatsSection;
