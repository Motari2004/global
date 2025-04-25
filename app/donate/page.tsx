"use client"
import { useState } from "react"
import type React from "react"

import "./donate.css"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<string>("50")
  const [isMonthly, setIsMonthly] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  })

  const handleAmountChange = (amount: string) => {
    setDonationAmount(amount)
  }

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would connect to a payment processor
    alert(`Thank you for your ${isMonthly ? "monthly" : "one-time"} donation of $${donationAmount}!`)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Support Our Mission</h1>
          <p>Your donation helps protect Africa's wildlife and ecosystems</p>
        </div>
      </section>

      <section className="section donation-section">
        <div className="container">
          <div className="donation-grid">
            <div className="donation-form-container">
              <div className="donation-form-wrapper">
                <h2>Make a Donation</h2>
                <div className="donation-type-toggle">
                  <button className={!isMonthly ? "active" : ""} onClick={() => setIsMonthly(false)}>
                    One-time
                  </button>
                  <button className={isMonthly ? "active" : ""} onClick={() => setIsMonthly(true)}>
                    Monthly
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="donation-form">
                  <div className="amount-options">
                    <h3>Select Amount</h3>
                    <div className="amount-buttons">
                      {["25", "50", "100", "250"].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={donationAmount === amount ? "active" : ""}
                          onClick={() => handleAmountChange(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                      <div className="custom-amount">
                        <span>$</span>
                        <input
                          type="number"
                          placeholder="Other"
                          value={!["25", "50", "100", "250"].includes(donationAmount) ? donationAmount : ""}
                          onChange={handleCustomAmount}
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="donor-info">
                    <h3>Your Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a country</option>
                        <option value="Kenya">Kenya</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="donation-summary">
                    <h3>Donation Summary</h3>
                    <div className="summary-row">
                      <span>Donation Amount:</span>
                      <span>${donationAmount}</span>
                    </div>
                    <div className="summary-row">
                      <span>Frequency:</span>
                      <span>{isMonthly ? "Monthly" : "One-time"}</span>
                    </div>
                  </div>

                  <button type="submit" className="donate-button">
                    Complete Donation
                  </button>

                  <p className="secure-note">
                    <i className="fas fa-lock"></i> Your payment information is secure and encrypted
                  </p>
                </form>
              </div>
            </div>

            <div className="donation-info">
              <div className="impact-card">
                <h3>Your Impact</h3>
                <ul className="impact-list">
                  <li>
                    <strong>$25</strong> provides food and care for a rescued animal for one week
                  </li>
                  <li>
                    <strong>$50</strong> supports anti-poaching patrols for one day
                  </li>
                  <li>
                    <strong>$100</strong> funds community education programs for a month
                  </li>
                  <li>
                    <strong>$250</strong> helps restore one acre of critical habitat
                  </li>
                </ul>
              </div>

              <div className="other-ways">
                <h3>Other Ways to Support</h3>
                <div className="support-options">
                  <div className="support-option">
                    <h4>Corporate Partnerships</h4>
                    <p>Partner with us to support conservation while meeting your CSR goals.</p>
                    <a href="/corporate-giving" className="learn-more">
                      Learn More
                    </a>
                  </div>

                  <div className="support-option">
                    <h4>Legacy Giving</h4>
                    <p>Leave a lasting impact by including EcoHope in your estate planning.</p>
                    <a href="/legacy-giving" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Why Donors Support Us</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial">
              <div className="quote">
                "Supporting EcoHope has been one of the most rewarding decisions I've made. Seeing the direct impact of
                my donations on wildlife conservation gives me hope for the future."
              </div>
              <div className="author">- Maria Johnson, Monthly Donor since 2018</div>
            </div>

            <div className="testimonial">
              <div className="quote">
                "As a business owner, partnering with EcoHope has not only helped us meet our sustainability goals but
                has connected us with a cause our customers and employees care deeply about."
              </div>
              <div className="author">- James Mwangi, Corporate Partner</div>
            </div>

            <div className="testimonial">
              <div className="quote">
                "I've visited several of EcoHope's projects in Kenya, and I've seen firsthand how efficiently they use
                donations to create real change for wildlife and communities."
              </div>
              <div className="author">- David Chen, Major Donor</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
