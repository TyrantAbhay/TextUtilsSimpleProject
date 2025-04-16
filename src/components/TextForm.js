import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" id="txt" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert To UpperCase</button>
    </div>
  )
}
