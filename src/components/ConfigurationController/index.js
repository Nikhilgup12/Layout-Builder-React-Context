import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = () => {
        onToggleShowContent(showContent)
      }
      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }
      const onClickRightNavbar = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <nav className="nav-container">
          <div className="nav-content">
            <h1 className="nav-heading"> Layout </h1>
            <ul className="nav-menu">
              <li className="nav-list">
                <input
                  type="checkbox"
                  id="content"
                  className="checkbox-content"
                  onClick={onClickContent}
                />
                <label htmlFor="content" className="content-label">
                  Content
                </label>
              </li>
              <li className="nav-list">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  className="checkbox-content"
                  onClick={onClickLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="content-label">
                  Left Navbar
                </label>
              </li>
              <li className="nav-list">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  className="checkbox-content"
                  onClick={onClickRightNavbar}
                />
                <label htmlFor="rightNavbar" className="content-label">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
