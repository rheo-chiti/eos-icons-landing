import React, { useState, useEffect } from 'react'
import AppContext from '../utils/AppContext'

import Button from '../components/Button'
import Cookies from 'js-cookie'

const CookiesBanner = () => {
  const [cookiesBanner, setCookiesBanner] = useState(false)

  /* Toggle customizable functionality */
  const cookiesHandler = (callback) => {
    setCookiesBanner(true)
    return callback
  }

  useEffect(() => {
    const acceptanceStatus = Cookies.get('acceptance-remainder')
    if (acceptanceStatus) {
      setCookiesBanner(true)
    }
  }, [cookiesBanner])

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <>
          <div
            className={cookiesBanner ? 'cookies-alert hide' : 'cookies-alert'}
          >
            <div className='cookies-alert-body'>
              <p>
                EOS Icons uses cookies to help us learn more about how we can
                improve our product.
                <br />
                <a href='/cookies-policy'>Learn more about our cookie policy</a>
              </p>
            </div>
            <div className='cookies-alert-buttons'>
              <a
                className='btn btn-default btn-inverted'
                href='/cookies-policy'
              >
                Edit preferences
              </a>
              <Button
                onClick={() =>
                  cookiesHandler(dispatch({ type: 'TOGGLE_CUSTOMIZE_COOKIES' }))
                }
                primary
                customClass='js-cookies-accept'
              >
                Accept
              </Button>
            </div>
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default CookiesBanner
