import logo from "/imgs/logo/logo.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img className="navbar-logo" src={logo} alt="" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Homes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Comercial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Plots
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Rent
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="nav-side-btns">
                <button className="add-property">
                  <i className="bi bi-house-add"></i>
                  <span> add-property</span>
                </button>
                <a href="#" className="signin">
                  <i className="bi bi-door-open"></i>
                  <span>sign-in</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
