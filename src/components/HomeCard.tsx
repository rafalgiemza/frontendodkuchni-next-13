import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><Image src="/todo.jpg" alt="Album" width="1024" height={1024} /></figure>
      <div className="card-body">
        <h2 className="card-title">Mr hilary app</h2>
        <p>This app is a dynamic web application built using Next.js version 13.</p>
        <p>The current version (1.0) allows users to simply add a new item (with a title) and toggle completed or not.</p>
        <p>Road map:</p>
        <p>Version 1.1: Extend the model with images, tags, and description</p>
        <p>Version 1.2: Add sorting and filtering by tags</p>
        <p>Version 1.3: Connect with AI API to automatically fulfill each field from the model</p>
        <p>Stay tuned!</p>
        <div className="card-actions justify-end">
          <Link href="/todo" className="btn btn-primary" >DEMO</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeCard