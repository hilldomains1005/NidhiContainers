import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const categories = ['All', 'Storage', 'Shipping', 'Industrial', 'Custom']

const products = [
  {
    id: 1,
    name: 'Heavy-Duty Storage Container',
    category: 'Storage',
    icon: '📦',
    desc: 'Robust steel storage containers for warehousing and bulk inventory management.',
    capacity: '2,000L – 20,000L',
    material: 'Mild Steel / Stainless Steel',
    features: ['Weather-resistant coating', 'Forklift-compatible base', 'Lockable doors'],
  },
  {
    id: 2,
    name: 'Stackable Storage Bins',
    category: 'Storage',
    icon: '🗂️',
    desc: 'Space-efficient stackable bins perfect for organized storage in warehouses.',
    capacity: '50L – 500L',
    material: 'HDPE Plastic',
    features: ['Stackable design', 'UV-stabilized', 'Color-coded options'],
  },
  {
    id: 3,
    name: 'ISO Shipping Container (20ft)',
    category: 'Shipping',
    icon: '🚢',
    desc: 'Standard 20-foot ISO containers for international and domestic cargo shipping.',
    capacity: '33 CBM',
    material: 'Cor-Ten Steel',
    features: ['CSC certified', 'Wind & water-tight', 'Double door entry'],
  },
  {
    id: 4,
    name: 'ISO Shipping Container (40ft)',
    category: 'Shipping',
    icon: '🛳️',
    desc: 'High-cube 40-foot containers offering maximum cargo volume for bulk shipping.',
    capacity: '76 CBM',
    material: 'Cor-Ten Steel',
    features: ['High-cube design', 'Anti-corrosion treated', 'Pallet-compatible floor'],
  },
  {
    id: 5,
    name: 'Open-Top Container',
    category: 'Shipping',
    icon: '🏗️',
    desc: 'Open-top design for easy loading of oversized cargo using cranes or hoists.',
    capacity: '30 CBM',
    material: 'Cor-Ten Steel',
    features: ['Removable tarpaulin cover', 'Bow rings for securing', 'Flexible loading'],
  },
  {
    id: 6,
    name: 'Industrial Waste Bin',
    category: 'Industrial',
    icon: '🗑️',
    desc: 'Heavy-duty waste bins for factories, construction sites, and industrial facilities.',
    capacity: '200L – 2,000L',
    material: 'Galvanized Steel',
    features: ['Heavy-duty wheels', 'Lid lock mechanism', 'Corrosion-resistant'],
  },
  {
    id: 7,
    name: 'Chemical Storage Tank',
    category: 'Industrial',
    icon: '⚗️',
    desc: 'Specially designed tanks for safe storage of chemicals, acids, and hazardous liquids.',
    capacity: '500L – 50,000L',
    material: 'Stainless Steel 316L',
    features: ['Pressure tested', 'Chemical-grade sealing', 'Vent valve system'],
  },
  {
    id: 8,
    name: 'Pallet Container',
    category: 'Industrial',
    icon: '🧰',
    desc: 'Metal pallet containers with collapsible walls for efficient bulk material handling.',
    capacity: '800L – 1,200L',
    material: 'Mild Steel',
    features: ['Collapsible sides', 'Forklift-ready', 'Nesting capability'],
  },
  {
    id: 9,
    name: 'Custom Container Solution',
    category: 'Custom',
    icon: '🔧',
    desc: 'Fully bespoke container fabrication to your exact dimensions and specifications.',
    capacity: 'As required',
    material: 'Customer specified',
    features: ['Any shape & size', 'Custom fittings', 'Brand painting/coating'],
  },
  {
    id: 10,
    name: 'Refrigerated Container',
    category: 'Custom',
    icon: '❄️',
    desc: 'Temperature-controlled containers for food, pharmaceuticals, and perishable goods.',
    capacity: '28 CBM – 60 CBM',
    material: 'Insulated Stainless Steel',
    features: ['-25°C to +25°C range', 'Remote temperature monitoring', 'Food-grade interior'],
  },
  {
    id: 11,
    name: 'Modular Office Container',
    category: 'Custom',
    icon: '🏢',
    desc: 'Modified containers converted into office spaces for site offices and portacabins.',
    capacity: '20ft / 40ft',
    material: 'Cor-Ten Steel with insulation',
    features: ['Electrical fittings', 'Air conditioning ready', 'Windows & doors'],
  },
  {
    id: 12,
    name: 'IBC Tank (Intermediate Bulk)',
    category: 'Industrial',
    icon: '🛢️',
    desc: 'Intermediate bulk containers for safe transport and storage of liquids and granules.',
    capacity: '1,000L',
    material: 'Stainless Steel / HDPE',
    features: ['UN-approved', 'Drain valve fitted', 'Stackable pallet base'],
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <div className="products-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">Our Products</h1>
          <p className="page-banner__desc">
            A complete range of high-quality containers for every industrial and commercial application.
          </p>
        </div>
      </div>

      {/* Filter */}
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="prod-grid">
            {filtered.map((p) => (
              <div className="prod-card" key={p.id}>
                <div className="prod-card__header">
                  <span className="prod-card__icon">{p.icon}</span>
                  <span className="prod-card__cat">{p.category}</span>
                </div>
                <h3 className="prod-card__name">{p.name}</h3>
                <p className="prod-card__desc">{p.desc}</p>

                <div className="prod-card__specs">
                  <div className="spec-row">
                    <span className="spec-label">Capacity</span>
                    <span className="spec-value">{p.capacity}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Material</span>
                    <span className="spec-value">{p.material}</span>
                  </div>
                </div>

                <button
                  className="prod-card__toggle"
                  onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                >
                  {expandedId === p.id ? 'Hide Features ▲' : 'View Features ▼'}
                </button>

                {expandedId === p.id && (
                  <ul className="prod-card__features">
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className="feature-check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                )}

                <Link to="/contact" className="prod-card__cta">
                  Request Quote →
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-products">No products found in this category.</div>
          )}
        </div>
      </section>

      {/* Custom Order Banner */}
      <section className="custom-banner">
        <div className="container custom-banner__inner">
          <span className="custom-banner__icon">🔧</span>
          <div>
            <h2>Need a Custom Solution?</h2>
            <p>
              Can't find exactly what you need? Our engineering team can design and
              fabricate containers to your exact specifications.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  )
}
