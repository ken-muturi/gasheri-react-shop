const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          primary
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
