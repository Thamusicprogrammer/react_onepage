import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faToggleOn,
  faToggleOff,
  faPhone,
  faBars,
  faTimes, // Add the "X" icon
  faCoffee,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar

  // Load the saved theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Apply the current theme to the body class and save it to localStorage
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Toggle sidebar handler
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* AliceCarousel Section */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
      >
        <div className="bg1"></div>
        <div className="bg2"></div>
        <div className="bg3"></div>
      </AliceCarousel>

      {/* Header Section */}
      <header className="section1">
        <div id="main" className="sticky-header">
          <Image
            src="/logo.png"
            alt="culture"
            width={40}
            height={40}
            className="logo"
          />
          <nav>
            <ul
              className={`lists ${isSidebarOpen ? "open" : ""}`}
              onClick={toggleSidebar} // Close the sidebar when an item is clicked
            >
              <li>
                <a href="#intro">Intro</a>
              </li>
              <li>
                <a href="#countdown">Countdown</a>
              </li>
              <li>
                <a href="#note">Notes</a>
              </li>
              <li>
                <a href="#location">Location</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle Switch */}
          <div className="toggleswitch" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={isDarkMode ? faToggleOn : faToggleOff}
              className="toggle-icon"
              style={{
                cursor: "pointer",
                fontSize: "24px",
                color: isDarkMode ? "#ffd700" : "#555",
              }}
            />
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={faMoon}
                className="moon-icon"
                style={{
                  marginLeft: "8px",
                  fontSize: "20px",
                  color: "#ffd700",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                className="sun-icon"
                style={{
                  marginLeft: "8px",
                  fontSize: "20px",
                  color: "#555",
                }}
              />
            )}
          </div>

          <button className="button1">
            <FontAwesomeIcon className="fa-solid fa-phone" icon={faPhone} />
            Call Us
          </button>

          {/* Sidebar Toggle Icon */}
          <FontAwesomeIcon
            className="fa-solid fa-bars fa-2xl"
            id="bar"
            icon={isSidebarOpen ? faTimes : faBars} // Switch between icons
            onClick={toggleSidebar} // Handle click
          />
        </div>

        {/* Main Text Content */}
        <p className="first-text" id="intro">
          Imomotimi Foundation Presents
        </p>
        <h1 className="second-text">Imomotimi Ijaw</h1>
        <h1 className="third-text">Dance Contest 2024</h1>

        <button className="button2">
          Download Entry Form
          <FontAwesomeIcon icon={faDownload} style={{ paddingLeft: 5 }} />
        </button>

        <p className="last-p">
          All duly filled out forms and the entry fees should be brought along
          to the audition.
        </p>

        <FontAwesomeIcon
          className="fas fa-coffee icon"
          id="coffee"
          icon={faCoffee}
        />

        {/* Dynamic Image for Dark Mode */}
        <Image
          id="topWhite"
          src={
            isDarkMode
              ? "/shape-top-black-80.png"
              : "/shape-top-white-80.png"
          }
          className="img2"
          alt="wave"
          width={1000}
          height={100}
        />
      </header>
    </div>
  );
}
