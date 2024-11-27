import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function Important({ isDarkMode }) {
  return (
    <section className={`section3 ${isDarkMode ? "dark" : "light"}`}>
      <div className="important-things" id="note">
        <h1 style={{ fontSize: 42 }}>
          Important things <br /> to note...
        </h1>
      </div>
      <div className="Pricing">
        <ul>
          <FontAwesomeIcon
            className="fa-solid fa-money-bill-wave fa-2xl"
            icon={faMoneyBill}
            style={{ color: isDarkMode ? "#FFD700" : "#8B0000" }}
          />
          <li style={{ fontSize: 25 }}>Pricing</li>
          <li className="pricing-p" style={{ opacity: "0.8" }}>
            Audition forms are available for <br />
            ₦1,000 for single contestants,
            <br /> and ₦1,500 for a group of five.
          </li>
        </ul>
      </div>
      <div className="prizes">
        <ul>
          <FontAwesomeIcon
            className="fa-solid fa-trophy fa-2xl"
            icon={faTrophy}
            style={{ color: isDarkMode ? "#FFD700" : "#8B0000" }}
          />
          <li style={{ fontSize: 25 }}>Prizes</li>
          <li className="p-content" style={{ opacity: "0.8" }}>
            <strong>1st Prize:</strong> <strong>₦</strong>2,000,000
          </li>
          <li className="p-content" style={{ opacity: "0.8" }}>
            <strong>2nd Prize:</strong> <strong>₦</strong>1,000,000
          </li>
          <li className="p-content" style={{ opacity: "0.8" }}>
            <strong>3rd Prize:</strong> <strong>₦</strong>500,000
          </li>
        </ul>
      </div>
    </section>
  );
}
