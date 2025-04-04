'use client'

import Editor, { OnChange } from '@monaco-editor/react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const CreateCourse = () => {

  const [title, setTitle] = useState('')
  const [desc1, setdesc1] = useState("")
  const [desc2, setdesc2] = useState("")
  const [desc3, setdesc3] = useState("")

  const [loading, setLoading] = useState(false)

  function createCourse() {
    setLoading(true)
    fetch('/api/admin/courses/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseTitle: title,
        desc1,
        desc2,
        desc3 
      }),
    })
  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">

      <h1 className="text-2xl font-bold">Create a New Course</h1>

      <br />

      <h2 className="text-xl font-semibold">Course Title</h2>
      <input onChange={e => setTitle(e.target.value)} />

      <h2 className="text-xl font-semibold">Description 1</h2>
      <input onChange={e => setdesc1(e.target.value)} />

      <h2 className="text-xl font-semibold">Description 2</h2>
      <input onChange={e => setdesc2(e.target.value)} />

      <h2 className="text-xl font-semibold">Description 3</h2>
      <input onChange={e => setdesc3(e.target.value)} />

        <button onClick={createCourse} disabled={loading} className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Create New Course
        </button>

      <br />

      <div className="flex flex-row">

      <a href="/controlpanel">
        <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Back To Control Panel
        </button>
      </a>

      <a href="/controlpanel/coursemanager">
        <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Back To Course Manager
        </button>
      </a>

      </div>

    </div>
  )
}

export default CreateCourse