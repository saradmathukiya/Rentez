import { useEffect, useState } from "react";
import { buyCourse } from "../services/operations/paymentAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const handleBuyCourse = (plan, planType) => {
    if (token) {
      buyCourse(token, plan, planType, user, navigate);
      return;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: "Standard",
      monthlyPrice: 199,
      yearlyPrice: 1999,
      description: "Get Started with our Standard Plan journey.",
      btn_name: "Go Standard",
      popular: false,
      featureList: [
        { text: "Visual Property Showcase", icon: IoCheckmark, color: "green" },
        { text: "Quality Inspection", icon: IoCheckmark, color: "green" },
        { text: "Flexible Leasing", icon: IoMdClose, color: "red"  },
        { text: "Regular Maintenance", icon: IoMdClose, color: "red" },
        { text: "Personalized Support", icon: IoMdClose, color: "red" },
      ]
    },
    {
      name: "Gold",
      monthlyPrice: 399,
      yearlyPrice: 2499,
      description: "Get Started with our Gold Plan journey.",
      btn_name: "Go Gold",
      popular: true,
      featureList: [
        { text: "Visual Property Showcase", icon: IoCheckmark, color: "green" },
        { text: "Quality Inspection", icon: IoCheckmark, color: "green" },
        { text: "Flexible Leasing", icon: IoCheckmark, color: "green" },
        { text: "Regular Maintenance", icon: IoMdClose, color: "red" },
        { text: "Personalized Support", icon: IoMdClose, color: "red" },
      ]
    },
    {
      name: "Premium",
      monthlyPrice: 599,
      yearlyPrice: 2999,
      description: "Get Started with our Premium Plan journey.",
      btn_name: "Go Premium",
      popular: false,
      featureList: [
        { text: "Visual Property Showcase", icon: IoCheckmark, color: "green" },
        { text: "Quality Inspection", icon: IoCheckmark, color: "green"},
        { text: "Flexible Leasing", icon: IoCheckmark, color: "green" },
        { text: "Regular Maintenance", icon: IoCheckmark, color: "green" },
        { text: "Personalized Support", icon: IoCheckmark, color: "green" },
      ]
    },
  ];

  return (
    <div className="bg-circle">
      <div className="pricing-container" id="pricing">
        <div className="pricing-header">
          <h2 className="pricing-title">Unlock wide range of Listings</h2>
          <p className="pricing-description">
            Explore our trio of plans, each offering a distinct set of
            advantages to suit your individual preferences.
          </p>
          <p className="pricing-description" style={{ marginTop: "1rem" }}>
            (All Plans FREE for first 30days)
          </p>
          <div className="pricing-toggle">
            <label
              htmlFor="toggle"
              className={`pricing-toggle-label ${
                isYearly ? "yearly-highlight" : "monthly-highlight"
              }`}
            >
              <span className="pricing-toggle-monthly">Monthly</span>
              {/* toggle button */}
              <div className="pricing-toggle-switch">
                <div
                  className={`pricing-toggle-switch-handle ${
                    isYearly
                      ? "pricing-toggle-switch-handle-yearly"
                      : "pricing-toggle-switch-handle-monthly"
                  }`}
                ></div>
              </div>

              <span className="pricing-toggle-yearly">Yearly</span>
            </label>
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
          </div>
        </div>
        <div className="pricing-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="pricing-package">
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 className="pricing-package-name">{pkg.name}</h3>
                {pkg.popular && <span className="popular-badge">Popular</span>}
              </div>
              <p className="pricing-package-price">
                {isYearly ? `₹${pkg.yearlyPrice}` : `₹${pkg.monthlyPrice}`}
                <span className="pricing-package-price-unit">
                  /{isYearly ? "year" : "month"}
                </span>
              </p>
              <p className="pricing-package-description">{pkg.description}</p>

              {/* Dynamic different icons */}
              <ul className="pricing-package-features">
                {pkg.featureList.map((feature, idx) => (
                  <li key={idx} className="feature">
                    {feature.icon({color: feature.color})}
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-package-button">
                <button
                  onClick={() =>
                    handleBuyCourse(
                      isYearly ? pkg.yearlyPrice : pkg.monthlyPrice,
                      pkg.name
                    )
                  }
                  className="pricing-package-button-primary"
                >
                  {pkg.btn_name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
