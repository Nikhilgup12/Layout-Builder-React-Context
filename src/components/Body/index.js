import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading"> Left Navbar Menu </h1>
              <ul className="left-navbar-menu">
                <li className="left-navbar-list"> Item 1 </li>
                <li className="left-navbar-list"> Item 2 </li>
                <li className="left-navbar-list"> Item 3 </li>
                <li className="left-navbar-list"> Item 4 </li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-navbar-heading"> Content </h1>
              <p>
                All components you implement should go in the src/components
                directory. Don't change the component folder names as those are
                the files being imported into the tests. Do not remove the
                pre-filled code Want to quickly review some of the concepts you
                been learning? Take a look at the Cheat Sheets.
              </p>
            </div>
          ) : (
            ''
          )}

          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="left-navbar-heading"> Right Navbar </h1>
              <div className="right-one-container">Ad 1</div>
              <div className="right-one-container">Ad 2</div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
