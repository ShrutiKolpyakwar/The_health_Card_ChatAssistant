import { Link } from "react-router-dom";

function ProviderCard({ provider }) {
  return (
    <div className="provider-card">
      <div className="discount-badge">
        10% OFF
      </div>

      <div className="provider-info">
        <p className="category">
          {provider.specialty} • {provider.location}
        </p>

        <h2>{provider.name}</h2>

        <p className="provider-description">
          {provider.description?.substring(0, 120)}...
        </p>

        <div className="provider-contact">
          <p>📍 {provider.address}</p>
          <p>📞 {provider.phone}</p>
        </div>

        <Link
          to={`/provider/${provider.id}`}
          className="book-btn"
        >
          View Provider
        </Link>
      </div>
    </div>
  );
}

export default ProviderCard;