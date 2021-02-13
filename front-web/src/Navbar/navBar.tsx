import { Link } from "react-router-dom";

function Navbar () {
  return (
    <header>
      <div className="containe-fluidr p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-danger">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="navbar-brand" to="/">
          Hospital Universitário Oswaldo Cruz
          </Link>

          <section className="collpase navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto ">

              <Link className="nav-item nav-link " to="/home">

                <i className="fas fa-home"></i>&nbsp;Home

              </Link>

              <Link className="nav-item nav-link" to="/documents">

                <i className="far fa-file"></i>&nbsp;Documentos
              </Link>

              <Link className="nav-item nav-link" to="/sendDocuments">

                <i className="fas fa-paper-plane">&nbsp;</i>Envio de Documentos
              </Link>

              <a className="nav-item nav-link" href="#">

                <i className="fas fa-sign-out-alt">&nbsp;</i>Sign

              </a>

            </div>

          </section>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
 