import { useState, useEffect } from 'react'

import './Options.css'

export const Options = () => {
  const [countSync, setCountSync] = useState(0)

  useEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCountSync(result.count || 0)
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        setCountSync(request.count || 0)
      }
    })
  }, [])

  return (
    <main>
      <h3>Options Page</h3>
      <h3>USER OPTIONS ??????</h3>

      <h3>APP OPTIONS ??????</h3>

      <h4>Count from Popup: {countSync}</h4>
    </main>
  )
}

export default Options
