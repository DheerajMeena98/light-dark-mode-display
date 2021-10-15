import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    containerBcgColorMode: 'dark-mode-container',
    buttonColorMode: 'Light Mode',
    buttonProperties: 'dark-mode-button',
    heading: 'heading-in-dark-mode',
  }

  changeColorMode = () => {
    this.setState(prevMode => {
      if (prevMode.buttonColorMode === 'Light Mode') {
        return {
          containerBcgColorMode: 'light-mode-container',
          buttonColorMode: 'Dark Mode',
          buttonProperties: 'light-mode-button',
          heading: 'heading-in-light-mode',
        }
      }

      return {
        containerBcgColorMode: 'dark-mode-container',
        buttonColorMode: 'Light Mode',
        buttonProperties: 'dark-mode-button',
        heading: 'heading-in-dark-mode',
      }
    })
  }

  render() {
    const {
      containerBcgColorMode,
      buttonColorMode,
      buttonProperties,
      heading,
    } = this.state

    return (
      <div className="bcg-light-dark-mode-container">
        <div className={containerBcgColorMode}>
          <h1 className={heading}> Click to Change Mode</h1>
          <button
            className={buttonProperties}
            onClick={this.changeColorMode}
            type="button"
          >
            {' '}
            {buttonColorMode}{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
