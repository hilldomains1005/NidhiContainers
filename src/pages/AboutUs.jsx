import { Link } from 'react-router-dom'
import './AboutUs.css'

const team = [
  { name: 'VIPUL LAXMANBHAI PATEL', role: 'DIRECTOR', initial: 'V' },
  { name: 'PRAFUL KUMUDCHANDRA PATEL', role: 'DIRECTOR', initial: 'P' },
  { name: 'RAJESHWARI PRAFULBHAI PATEL', role: 'DIRECTOR', initial: 'R' },
  { name: 'ADITYA VIPUL PATEL', role: 'DIRECTOR', initial: 'A' },
]

const features = [
  { icon: '💪', label: 'Durability' },
  { icon: '💰', label: 'Cost Effectiveness' },
  { icon: '✅', label: 'Assured Quality' },
  { icon: '⚡', label: 'Improved Performance' },
]

const rawMaterials = [
  'Glass Filled Nylon',
  'PC/ABS Blends',
  'HIPS',
  'Engineering Thermoplastics',
]

const infraUnits = [
  { icon: '🏭', title: 'Manufacturing Unit', desc: 'Hi-tech machines and equipment for precise fabrication as per defined quality standards.' },
  { icon: '🔬', title: 'Quality Testing Unit', desc: 'Strict inspection at every stage to ensure products meet all quality benchmarks.' },
  { icon: '📦', title: 'Warehousing & Packaging', desc: 'Proper packing and storage to ensure products reach clients without any flaws.' },
  { icon: '📊', title: 'Marketing Unit', desc: 'Dedicated team managing client relations, procurement, and timely delivery.' },
]

export default function AboutUs() {
  return (
    <div className="about">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">About Us</h1>
          <p className="page-banner__desc">
            20+ years of excellence in manufacturing, exporting and supplying superior quality plastic articles.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section">
        <div className="container about-overview">
          <div className="about-overview__text">
            <div className="divider" style={{ margin: '0 0 16px' }}></div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Who We Are
            </h2>
            <p className="about-overview__para">
              We, at Nidhi Containers Pvt Ltd are manufacturing, exporting and supplying a broad
              assortment of superior quality Plastic Articles such as Plastic Industrial, Engineering,
              PU parts and customized plastic parts etc. and all types of Plastic Part Die and Mould.
              We also offer CNC Milling Work and Plastic Injection Moulding Work.
            </p>
            <p className="about-overview__para">
              Our state-of-the-art manufacturing unit is equipped with modern machines and equipment,
              which facilitates us to manufacture Plastic Articles as per the defined quality standards.
            </p>
            <p className="about-overview__para">
              Owing to our more than <strong>20+ years</strong> of industry experience in offering
              Plastic Articles, we are highly proficient in delivering our products within the promised
              delivery time. Our quality inspectors strictly judge each and every aspect during
              procurement and fabrication to ensure products meet the defined standards of quality.
            </p>
            <p className="about-overview__para">
              Under the successful guidance of our mentor, <strong>Mr. Vipul Patel</strong>, we have
              been able to carve a niche for ourselves in the market of Plastic Articles. His affluent
              industry understanding and dedication enables us to manufacture, export and supply our
              products across the Indian Subcontinent in a cost-effective manner.
            </p>
            <div className="about-overview__highlights">
              <div className="highlight-item">
                <strong>20+</strong> Years Experience
              </div>
              <div className="highlight-item">
                <strong>ISO</strong> Certified
              </div>
              <div className="highlight-item">
                <strong>Pan-India</strong> Supply
              </div>
            </div>
          </div>

          <div className="about-overview__visual">
            <div className="about-visual-card">
              <div className="about-visual-icon">🏭</div>
              <div className="about-visual-text">
                <h3>Our Manufacturing Plant</h3>
                <p>Naroda, Ahmedabad, Gujarat</p>
              </div>
            </div>
            <div className="about-ops-list">
              <div className="about-ops-item">
                <span className="about-ops-icon">🏭</span>
                <span>Manufacturing Industrial Containers</span>
              </div>
              <div className="about-ops-item">
                <span className="about-ops-icon">🔩</span>
                <span>Mould and Die Maintenance</span>
              </div>
              <div className="about-ops-item">
                <span className="about-ops-icon">⚙️</span>
                <span>CNC &amp; VMC Milling Work</span>
              </div>
              <div className="about-ops-item">
                <span className="about-ops-icon">✅</span>
                <span>Quality Assurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features & Raw Materials */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-two-col">
            {/* Product Features */}
            <div>
              <div className="divider" style={{ margin: '0 0 16px' }}></div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>Product Features</h2>
              <p className="about-overview__para" style={{ marginBottom: '28px' }}>
                Our products include some outstanding features that set them apart in the industry.
              </p>
              <div className="features-list">
                {features.map((f) => (
                  <div className="feature-pill" key={f.label}>
                    <span className="feature-pill__icon">{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Raw Materials */}
            <div>
              <div className="divider" style={{ margin: '0 0 16px' }}></div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>Raw Materials</h2>
              <p className="about-overview__para" style={{ marginBottom: '28px' }}>
                We use only premium-grade raw materials to ensure the highest quality in every product.
              </p>
              <div className="materials-list">
                {rawMaterials.map((m) => (
                  <div className="material-item" key={m}>
                    <span className="material-check">✓</span>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction */}
      <section className="section">
        <div className="container">
          <div className="satisfaction-banner">
            <div className="satisfaction-banner__icon">🤝</div>
            <div>
              <h2 className="satisfaction-banner__title">Client Satisfaction</h2>
              <p className="satisfaction-banner__text">
                The sole aim of our organization is providing optimum client satisfaction — we leave
                no stone unturned to meet their exact expectations. Ethical business dealings, timely
                delivery, and a customizing facility enable us to satisfy our clients by fulfilling
                their varied tastes and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section section--alt">
        <div className="container">
          <div className="divider"></div>
          <h2 className="section-title">Infrastructure</h2>
          <p className="section-subtitle">
            Our state-of-the-art infrastructure is facilitated with hi-tech machines and equipment
            to fabricate products as per defined quality standards in a timely manner.
          </p>
          <div className="infra-grid">
            {infraUnits.map((u) => (
              <div className="infra-card" key={u.title}>
                <span className="infra-card__icon">{u.icon}</span>
                <h4 className="infra-card__title">{u.title}</h4>
                <p className="infra-card__desc">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="divider"></div>
          <h2 className="section-title">Our Directors</h2>
          <p className="section-subtitle">The leadership driving Nidhi Containers Pvt Ltd forward.</p>
          <div className="team-grid">
            {team.map((t) => (
              <div className="team-card" key={t.name}>
                <div className="team-card__avatar">{t.initial}</div>
                <h4 className="team-card__name">{t.name}</h4>
                <p className="team-card__role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Want to partner with us?</h2>
          <p>We'd love to discuss how we can serve your container and plastic article requirements.</p>
          <Link to="/contact" className="btn-primary">Contact Our Team</Link>
        </div>
      </section>
    </div>
  )
}
