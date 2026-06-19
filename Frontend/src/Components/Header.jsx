function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>The Health Card</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="What are you looking for?"
        />

        <input
          type="text"
          placeholder="Location"
        />

        <button>Search</button>
      </div>

      <div className="header-actions">
        <button className="member-btn">
          Become a Member
        </button>

        <button className="signin-btn">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;