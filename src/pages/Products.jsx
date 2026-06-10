import { Link } from 'react-router-dom'
import './Products.css'

const products = [
  {
    id: 1,
    name: 'Plastic Bottles',
    category: 'Bottle',
    image: null,
    icon: '🧴',
    capacity: '50ml – 500ml',
  },
  {
    id: 2,
    name: 'Plastic Jars',
    category: 'Jar',
    image: null,
    icon: '🫙',
    capacity: '50ml – 500ml',
  },
  {
    id: 3,
    name: 'Plastic Containers',
    category: 'Container',
    image: null,
    icon: '📦',
    capacity: '50ml – 500ml',
  },
  {
    id: 4,
    name: 'New Slayer Bottle',
    category: 'Bottle',
    image: '/Bottles/NewSlayerBottle.jpg',
    capacity: '50ml – 500ml',
  },
  {
    id: 5,
    name: 'Refri Bottle',
    category: 'Bottle',
    image: '/Bottles/New_Refri_Bottle.jpg',
    capacity: '50ml – 500ml',
  },
  {
    id: 6,
    name: 'Paracot Bottle',
    category: 'Bottle',
    image: '/Bottles/ParacotBottle.jpg',
    capacity: '50ml – 500ml',
  },
  {
    id: 7,
    name: 'Refri Round Container',
    category: 'Container',
    image: '/Containers/Refri_Round_Container.jpg',
    capacity: '50ml – 500ml',
  },
  {
    id: 8,
    name: 'Refri Square Container',
    category: 'Container',
    image: '/Containers/Refri_Square_Container.jpg',
    capacity: '50ml – 500ml',
  },
  {
    id: 9,
    name: 'Slayer HDPE Container',
    category: 'Container',
    image: '/Containers/Slayer_HDPE_Container.jpg',
    capacity: '50ml – 500ml',
  },
]

export default function Products() {
  return (
    <div className="products-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">Our Products</h1>
          <p className="page-banner__desc">
            Manufacturing high-quality plastic bottles and containers ranging from 50ml to 500ml.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="divider"></div>
          <h2 className="section-title">Plastic Articles</h2>
          <p className="section-subtitle">
            Plastic Bottles, Containers &amp; Jars — 50ml to 500ml — manufactured to the highest quality standards
            for pharma, food, cosmetic, and industrial use.
          </p>

          <div className="prod-grid">
            {products.map((p) => (
              <div className="prod-card" key={p.id}>
                <div className="prod-card__img-wrap">
                  {p.image
                    ? <img src={p.image} alt={p.name} className="prod-card__img" />
                    : <span className="prod-card__icon-placeholder">{p.icon}</span>
                  }
                  <span className="prod-card__cat-badge">{p.category}</span>
                </div>
                <div className="prod-card__body">
                  <div className="prod-card__top">
                    <h3 className="prod-card__name">{p.name}</h3>
                    <span className="prod-card__capacity">{p.capacity}</span>
                  </div>
                  <Link to="/contact" className="prod-card__cta">
                    Request Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Banner */}
      <section className="custom-banner">
        <div className="container custom-banner__inner">
          <span className="custom-banner__icon">🔧</span>
          <div>
            <h2>Need a Custom Size or Shape?</h2>
            <p>
              We manufacture plastic bottles and containers in custom sizes, colours,
              and designs as per your specific requirements.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  )
}
