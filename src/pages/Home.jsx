import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { category: 'Projects Completed', value: '850+', label: 'World Wide Clients' },
  { category: 'Industries Served', value: '30+', label: 'Team Members' },
  { category: 'Machines Built', value: '5+', label: 'Winning Awards' },
]

const mvcs = [
  {
    num: '01',
    title: 'Our Mission',
    icon: '🎯',
    text: 'We dream to achieve higher and higher in the field of technology and infrastructure. We wish to bring never leading experience for you in poly products. Wish to walk to greater heights with your support and belief. Take care of your interests at heart!',
  },
  {
    num: '02',
    title: 'Our Vision',
    icon: '🔭',
    text: 'Our vision is to be a global market leader for delivering superior quality products in a wide range. Increase share in the field of innovation, service, quality, and commitment. Expand consumer satisfaction in the field of innovation and technology.',
  },
  {
    num: '03',
    title: 'Client Satisfaction',
    icon: '🤝',
    text: 'The sole aim of our organization is providing optimum client satisfaction for that purpose; we leave no stone unturned to meet their exact expectations.',
  },
  {
    num: '04',
    title: 'Our Infrastructure',
    icon: '🏭',
    text: 'The state-of-the-art infrastructure of our organization is facilitated with hi-tech machines and equipments, which assist us to fabricate our products as per the defined quality standards in timely manner.',
  },
]

const whyFeatures = [
  { icon: '💪', title: 'Durability', desc: 'Our products are wear resistant with high tensile strength to resist heavy workload, ensuring long-lasting service life.' },
  { icon: '💰', title: 'Cost Effectiveness', desc: 'We offer highly competitive pricing without compromising quality, delivering real value for your investment.' },
  { icon: '✅', title: 'Assured Quality', desc: 'Products manufactured under high-tech quality supervision, standing upon several quality checkups.' },
  { icon: '⚡', title: 'Improved Performance', desc: 'Well known for stable performance throughout the life span, complied with modern technologies.' },
]

const productRange = [
  'All Type of Plastic Parts',
  'Plastic Part Die and Mould',
  'VMC / CNC Milling Work',
  'Injection Moulding Work',
  'Engineering Plastic Parts',
  'Customize Plastic Parts',
  'PTFE, Nylon, PVDF, Delrin & P.U. Parts',
  'Plastic Electronics Parts',
  'Plastic Parts for Pharma Industries',
  'Pneumatic Valve Parts & Accessories',
  'All Type of Plastic Bottles & Moulds',
]

export default function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <h1 className="hero__title">
            Nidhi Containers Pvt Ltd<br />
            <span className="hero__title-accent">Plastic Machinery Parts Manufacturer</span>
          </h1>
          <p className="hero__desc">
            A famous Plastic Parts Manufacturer, Supplier, and Exporter in Ahmedabad —
            manufacturing world class plastic parts and its Die and Mould for various industrial segments.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/about" className="btn-outline">Know More</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-bar__inner">
          {stats.map((s) => (
            <div className="stat-item" key={s.value}>
              <span className="stat-category">{s.category}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Overview */}
      <section className="section overview-section">
        <div className="container overview-layout">
          <div className="overview-text">
            <div className="divider" style={{ margin: '0 0 16px' }}></div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Industrial Plastic Components Manufacturer
            </h2>
            <p className="overview-para">
              <em>"Nidhi Containers Pvt Ltd"</em> is a
              famous Plastic Parts Manufacturer, Supplier, and Exporter in Ahmedabad. With wide
              expertise we are expert in manufacturing world class plastic parts and its Die and Mould
              suitable for various industrial segments.
            </p>
            <p className="overview-para">
              We are the most trusted and reliable organization to provide top grade plastic parts
              used in several applications. Our products find their applications in assorted
              comprehensive construction and fabrication projects, and are extensively used in
              commercial and industrial sectors. We provide certified solutions for precise
              requirements of clients ensuring rust free performance throughout the service life.
            </p>
            <p className="overview-para">
              We offer poly parts that are easy to install, maintain and operate. Poly parts
              manufactured by Nidhi group of industries have sturdy performance, robust construction
              to ensure longevity, and complied with modern technologies. Our equipments are well
              known for their stable performance throughout the life span.
            </p>
            <p className="overview-para">
              <em>"Nidhi Containers Pvt Ltd"</em> is a quality oriented enterprise that strives to bring
              the expertise in products — maintaining the quality of products extremely high. We
              never compromise with the quality standards. We offer fully customizable products
              irrelevant of shape, size, and design as per your industrial requirements at
              reasonable prices. <strong>Your success and satisfaction is our main motive.</strong>
            </p>
            <Link to="/about" className="btn-primary" style={{ marginTop: '8px' }}>Read More →</Link>
          </div>

          <div className="overview-products">
            <h3 className="overview-products__title">Our Plastic Parts Range</h3>
            <ul className="overview-products__list">
              {productRange.map((item) => (
                <li key={item}>
                  <span className="list-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Client Satisfaction / Infrastructure */}
      <section className="section section--alt mvcs-section">
        <div className="container">
          <div className="divider"></div>
          <h2 className="section-title">A Comprehensive Product Range</h2>
          <p className="section-subtitle">Wide Range of Products</p>
          <div className="mvcs-grid">
            {mvcs.map((m) => (
              <div className="mvc-card" key={m.num}>
                <div className="mvc-card__header">
                  <span className="mvc-card__num">{m.num}</span>
                  <span className="mvc-card__icon">{m.icon}</span>
                </div>
                <h3 className="mvc-card__title">{m.title}</h3>
                <p className="mvc-card__text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us">
        <div className="container">
          <div className="divider"></div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We, Nidhi Containers Pvt Ltd with rich industry experience, are manufacturing,
            exporting and supplying a broad assortment of superior quality Plastic Articles. Our
            state-of-the-art manufacturing unit is equipped with modern machines and equipment to
            manufacture Plastic Articles as per the defined quality standards.
          </p>
          <div className="features-grid">
            {whyFeatures.map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">Ready to get started?</h2>
            <p className="cta-banner__desc">
              Contact our team today for a customized solution tailored to your requirements.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/about" className="btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
