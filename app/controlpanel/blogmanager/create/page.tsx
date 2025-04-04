'use client'

import Editor, { OnChange } from '@monaco-editor/react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Latex from 'react-latex-next'

const WriteNewPost = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState("")
  const [type, setType] = useState("")

  const [loading, setLoading] = useState(false)

  function createPost() {
    setLoading(true)
    fetch('/api/admin/blog/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postTitle: title,
        postContent: content
      }),
    })
  }

  function renderLatex() {

  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">

      <h1 className="text-2xl font-bold">Write a New Blog Post</h1>

      <h2 className="text-xl font-semibold">Post Title</h2>
      <input onChange={e => setTitle(e.target.value)} />

      <br />

        <div className='flex flex-row gap-72'>
            <div className='w-max-1/3'>

            <h2 className="text-xl font-semibold">Post Content</h2>
            <textarea width={75} onChange={e => setContent(e.target.value)} />
        </div>

        </div>

        <br />

        <button onClick={createPost} disabled={loading} className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Create a New Post
        </button>

      <div className="flex flex-row">        

      <a href="/controlpanel">
        <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Back To Control Panel
        </button>
      </a>

      <a href="/controlpanel/blogmanager">
        <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Back To Blog Manager
        </button>
      </a>

      </div>

    </div>
  )
}

export default WriteNewPost