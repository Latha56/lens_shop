import React from 'react'
import { useState } from "react"
import { FcApproval } from "react-icons/fc"

export default function Message() {
  const [Shown, setShown] = useState(false)

  const messageClick = event => {
    event.preventDefault()
    setShown(true)
  };

  return (
  <div>
  <form>
  <label htmlFor="message">why did you give this star?</label>
  <textarea
    rows="6"
    placeholder="Enter message..."
    name="message"
  ></textarea>
  <p>
  <button onClick={messageClick}> Send </button>
  {Shown?<h6 style={{display :"table-row-group"}}>{<FcApproval />}Thank you for your feedback</h6>:null}
  </p>
  </form>
  </div>
  )
}
