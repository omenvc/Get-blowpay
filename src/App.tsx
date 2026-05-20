import { useState } from 'react'
import './style.css'

const LOGO_URL = 'https://blowpay.app/assets/BlowAppLogo-DW2h5of4.svg'

function AppStores() {
  return (
    <div className="app-stores">
      <a href="#" className="store-badge">
        <div className="store-icon">
          <img src="/img/playstore.svg" alt="Play Store" />
        </div>
        <div className="store-text">
          <div className="store-text-small">GET IT ON</div>
          <div className="store-text-large">Google Play</div>
          <div className="store-text-small">Coming Soon</div>
        </div>
      </a>
      <a
        href="https://apps.apple.com/de/app/blowpay/id6502171466"
        className="store-badge"
      >
        <div className="store-icon">
          <img src="/img/apple.svg" alt="App Store" />
        </div>
        <div className="store-text">
          <div className="store-text-small">DOWNLOAD ON THE</div>
          <div className="store-text-large">App Store</div>
        </div>
      </a>
      <a href="/app-release.apk" download className="store-badge">
        <div className="store-icon">
          <img src="/img/apk.svg" alt="APK" />
        </div>
        <div className="store-text">
          <div className="store-text-small">DOWNLOAD</div>
          <div className="store-text-large">Android APK</div>
        </div>
      </a>
    </div>
  )
}

function App() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen((open) => !open)

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={LOGO_URL} alt="BlowPay Logo" />
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={toggleNav}
        >
          <span
            style={
              navOpen
                ? { transform: 'rotate(45deg) translate(5px, 5px)' }
                : undefined
            }
          />
          <span style={navOpen ? { opacity: 0 } : undefined} />
          <span
            style={
              navOpen
                ? { transform: 'rotate(-45deg) translate(7px, -6px)' }
                : undefined
            }
          />
        </button>
        <div
          className={`nav-links${navOpen ? ' active' : ''}`}
          id="navLinks"
        >
          <a href="https://blowpay.app">Our Feature</a>
          <a href="https://blowpay.app">About us</a>
          <a href="https://blowpay.app/about#faq">FAQ</a>
          <a href="https://blowpay.app/about#contact">Contact Us</a>
        </div>
        <a href="https://blowpay.app" className="cta-button">
          Get Started - It&apos;s Free
        </a>
      </nav>

      <div className="hero">
        <div className="world-map-overlay" />
        <div className="content">
          <h1 className="headline">
            Download the Blow<span className="red-dot">Pay</span> App
          </h1>
          <p className="subheadline">
            Experience bill payments made easy. Pay for data, electricity,
            Netflix, and more with a few taps on your smartphone.
          </p>

          <AppStores />

          <div className="social-follow-container">
            <h3 className="social-title">
              Follow Us &amp; stay <span className="red-dot">up</span> dated
            </h3>
            <p className="social-desc">
              Follow BlowPay on social media for a bill payment solution
              that&apos;s as swift and effortless as a refreshing breeze.
              Experience the difference today..
            </p>
            <div className="social-icons">
              <div className="social-icon instagram">
                <a
                  href="https://instagram.com/blowpay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.254-.66.599-1.216 1.153-1.772A4.908 4.908 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm6.965-2.402a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                </a>
              </div>
              <div className="social-icon facebook">
                <a
                  href="https://facebook.com/blowpayapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>
              </div>
              <div className="social-icon twitter">
                <a
                  href="https://x.com/blowpay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.18 10.16 8.49001 10.96 8.49001H12.84C13.76 8.49001 14.51 9.27001 14.51 10.24" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7.5V16.5" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 3V7H21" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L17 7" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="feature-title">Fast Payments</h3>
              <p className="feature-desc">
                Complete bill payments in seconds with our streamlined process.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke="#FF1A4B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="feature-title">Secure Transactions</h3>
              <p className="feature-desc">
                Your data is protected with bank-level encryption technology.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7501 2.44995C11.4501 1.85995 12.5801 1.85995 13.2701 2.44995L14.8501 3.80995C15.1501 4.06995 15.7101 4.27995 16.1101 4.27995H17.8101C18.8701 4.27995 19.7401 5.14995 19.7401 6.20995V7.90995C19.7401 8.29995 19.9501 8.86995 20.2101 9.16995L21.5701 10.7499C22.1601 11.4499 22.1601 12.5799 21.5701 13.2699L20.2101 14.8499C19.9501 15.1499 19.7401 15.7099 19.7401 16.1099V17.8099C19.7401 18.8699 18.8701 19.7399 17.8101 19.7399H16.1101C15.7201 19.7399 15.1501 19.9499 14.8501 20.2099L13.2701 21.5699C12.5701 22.1599 11.4401 22.1599 10.7501 21.5699L9.17005 20.2099C8.87005 19.9499 8.31005 19.7399 7.91005 19.7399H6.18005C5.12005 19.7399 4.25005 18.8699 4.25005 17.8099V16.0999C4.25005 15.7099 4.04005 15.1499 3.79005 14.8499L2.44005 13.2599C1.86005 12.5599 1.86005 11.4399 2.44005 10.7499L3.79005 9.16995C4.04005 8.86995 4.25005 8.30995 4.25005 7.91995V6.19995C4.25005 5.13995 5.12005 4.26995 6.18005 4.26995H7.90005C8.29005 4.26995 8.85005 4.05995 9.15005 3.80995L10.7501 2.44995Z" stroke="#FF1A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.88953 14.01C9.62953 14.01 9.41953 13.8 9.41953 13.54V10.36C9.41953 10.1 9.62953 9.88996 9.88953 9.88996C10.1495 9.88996 10.3595 10.1 10.3595 10.36V13.54C10.3595 13.8 10.1495 14.01 9.88953 14.01Z" fill="#FF1A4B" />
                  <path d="M14.1095 14.01C13.8495 14.01 13.6395 13.8 13.6395 13.54V10.36C13.6395 10.1 13.8495 9.88996 14.1095 9.88996C14.3695 9.88996 14.5795 10.1 14.5795 10.36V13.54C14.5795 13.8 14.3795 14.01 14.1095 14.01Z" fill="#FF1A4B" />
                  <path d="M12.0004 17.3199C10.8904 17.3199 9.80039 16.5899 9.80039 15.1499V8.8199C9.80039 8.5599 10.0104 8.3499 10.2704 8.3499C10.5304 8.3499 10.7404 8.5599 10.7404 8.8199V15.1499C10.7404 16.0099 11.3704 16.3799 12.0004 16.3799C12.6304 16.3799 13.2604 16.0099 13.2604 15.1499V8.8199C13.2604 8.5599 13.4704 8.3499 13.7304 8.3499C13.9904 8.3499 14.2004 8.5599 14.2004 8.8199V15.1499C14.2004 16.5899 13.1104 17.3199 12.0004 17.3199Z" fill="#FF1A4B" />
                </svg>
              </div>
              <h3 className="feature-title">All Bills in One Place</h3>
              <p className="feature-desc">
                Manage all your utilities and subscriptions in one app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
