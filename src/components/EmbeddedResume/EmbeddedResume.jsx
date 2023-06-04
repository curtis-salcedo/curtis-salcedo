import React from 'react';
import './EmbeddedResume.css'

export default function EmbeddedResume() {

  function handleDownloadResume() {
    return (
      window.open('https://docs.google.com/document/d/e/2PACX-1vQwPz2WhfZZtt1aIYfi15XMCuz0FU8SBxjeeJKhVD_IrAugGskyylvyo9tq_Jcvv-VPDbZAJ16F1fhQ/pub')
    )
  }

  return (
    <>
      <div className='EmbeddedResumeContainer'>

        <div className='EmbeddedResume'>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vQwPz2WhfZZtt1aIYfi15XMCuz0FU8SBxjeeJKhVD_IrAugGskyylvyo9tq_Jcvv-VPDbZAJ16F1fhQ/pub?embedded=true"></iframe>
        </div>

        <button className="resumeButton" onClick={handleDownloadResume}>Open in new window</button>
      </div>
    </>
  )
}