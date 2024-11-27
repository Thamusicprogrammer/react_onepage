import { useState, useEffect } from "react";
import Image from "next/image";

export default function Countdown({ isDarkMode }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 11, 30, 23, 59, 59);
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="time-box">
      <span className={`number ${isDarkMode ? 'dark-mode' : ''}`}>{value}</span>
      <hr className={isDarkMode ? 'dark-mode-hr' : ''} style={{ width: '27px' }} />
      <p className={`label ${isDarkMode ? 'dark-mode' : ''}`}>{label}</p>
    </div>
  );

  return (
    <section className={`section2 ${isDarkMode ? 'dark-mode' : ''}`} id="countdown">
      <div className={`countdown ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1 className={`section2-h1 ${isDarkMode ? 'dark-mode' : ''}`}>
          Countdown to Audition
        </h1>
        <div className="time-container">
          <TimeBox value={timeLeft.days} label="Days" />
          <div className={`divider ${isDarkMode ? 'dark-mode' : ''}`}>:</div>
          <TimeBox value={timeLeft.hours} label="Hours" />
          <div className={`divider ${isDarkMode ? 'dark-mode' : ''}`}>:</div>
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <div className={`divider ${isDarkMode ? 'dark-mode' : ''}`}>:</div>
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
      <Image
        id="topWhite"
        src="/shape-top-grey-80.png"
        alt="Header Shape"
        className="header-image"
        width={1700}
        height={100}
        priority
      />
    </section>
  );
}
