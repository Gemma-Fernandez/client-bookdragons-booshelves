import React from 'react'
import {useState} from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';

function ReviewComponent(props) {
    

const[progress, setProgress]= useState(Math.floor((props.progress/props.bookPages)*100))

  return (
    <div>
        <p>{props.userName}</p>
        <p>{props.bookTitle}</p>
        <p>{props.comment}</p>
        <p>My progress:</p>
        <p><ProgressBar now={progress} label={`${progress}%`} /></p>
    </div>
  )
}

export default ReviewComponent