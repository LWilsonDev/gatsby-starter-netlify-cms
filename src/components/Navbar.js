import React from 'react'
import { Link } from 'gatsby'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div>
        <label
              role="button"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              aria-label="menu"
              aria-expanded="false"
              htmlFor="nav-toggle-state"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </label>
          </div>
          <input type="checkbox" id="nav-toggle-state" ></input>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <Link activeClassName="is-active" className="navbar-item" to="/">
                Home
              </Link>
              <Link activeClassName="is-active" className="navbar-item" to="/tags">
                Projects
              </Link>
              <Link activeClassName="is-active" className="navbar-item" to="/contact">
                Contact
              </Link>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
