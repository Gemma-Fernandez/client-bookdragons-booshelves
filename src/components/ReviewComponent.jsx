import React from 'react'
import {useState} from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';

function ReviewComponent(props) {
    

const[progress, setProgress]= useState(Math.floor((props.progress/props.bookPages)*100))

  return (
    <div className="review">
        <p>USERNAME:  {props.userName}</p>
        <p>TITLE:  {props.bookTitle}</p>
        <p>REVIEW:  {props.comment}</p>
        <p>PROGRESS: <ProgressBar striped variant="success" animated now={progress} label={`${progress}%`} /></p>
        
    </div>
  )
}

export default ReviewComponent