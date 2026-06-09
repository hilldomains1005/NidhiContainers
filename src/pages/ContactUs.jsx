import './ContactUs.css'

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    lines: ['BEHIND INGERSOL RAND,', 'C-1/5, PLOT NO. 19, PHASE1, GIDC NARODA,', 'Ahmedabad, Gujarat, 382330'],
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: ['+91 98240 90503'],
  },
  {
    icon: '📧',
    title: 'Email Us',
    lines: ['ncpl2004@gmail.com'],
  }
]

export default function ContactUs() {
  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">Contact Us</h1>
          <p className="page-banner__desc">
            Have a question or need a quote? We're here to help. Reach out to our team today.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-centered">
          <div className="divider"></div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-intro">
            Our team is available Monday to Saturday to assist you with product inquiries,
            quotes, and support.
          </p>

          <div className="info-cards-grid">
            {contactInfo.map((item) => (
              <div className="info-card" key={item.title}>
                <span className="info-card__icon">{item.icon}</span>
                <div>
                  <h4 className="info-card__title">{item.title}</h4>
                  {item.lines.map((line) => (
                    <p className="info-card__line" key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
