import { useParams, Link } from "react-router-dom";
import providers from "../data/providers";

function ProviderDetails() {
  const { id } = useParams();

  const provider = providers.find(
    (p) => p.id === Number(id)
  );

  if (!provider) {
    return <h2>Provider Not Found</h2>;
  }

  return (
    <div className="provider-details">

      <div className="details-top">
        <Link to="/" className="back-btn">
          ← Back to Providers
        </Link>
      </div>

      <div className="provider-header">
        <h1>{provider.name}</h1>

        <p className="provider-description">
          {provider.description}
        </p>
      </div>

      <div className="provider-info-grid">

        <div className="info-card">
          <span className="info-label">Specialty</span>
          <span>{provider.specialty}</span>
        </div>

        <div className="info-card">
          <span className="info-label">Location</span>
          <span>{provider.location}</span>
        </div>

        <div className="info-card">
          <span className="info-label">Phone</span>
          <span>{provider.phone}</span>
        </div>

      </div>

      <h2 className="section-title">
        Benefits
      </h2>

      <ul className="benefits-list">
        {provider.benefits?.map((item, index) => (
          <li key={index}>
            ✓ {item}
          </li>
        ))}
      </ul>

      <h2 className="section-title">
        Services Offered
      </h2>

      <ul className="services-list">
        {provider.services?.map((service, index) => (
          <li key={index}>
            🏥 {service}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ProviderDetails;