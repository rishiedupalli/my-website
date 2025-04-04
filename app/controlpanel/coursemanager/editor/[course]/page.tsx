'use client'

import Link from 'next/link'
import { useState } from "react";

const EditACourse = async ({ params }: { params: { course: string } }) => {

  const searchable = decodeURI(params.course)

  const [loading, setLoading] = useState(false)

  const [LectureName, setLectureName] = useState("")
  const [LectureLink, setLectureLink] = useState("")
  const [NotesLink, setNotesLink] = useState("")
  const [PSETLink, setPSETLink] = useState("")
  const [PSETSolsLink, setPSETSolsLink] = useState("")

  function createNewLesson() {
    setLoading(true);
    fetch('/api/admin/courses/lessoncreator', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseName: searchable,
        name: LectureName,
        link: LectureLink,
        notes: NotesLink,
        pset: PSETLink,
        psetsols: PSETSolsLink
      }),
    })

  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">

      <h1 className="font-semibold text-2xl">Create a New Lesson: {searchable}</h1>

      <h2 className="text-xl font-semibold">Lecture Title</h2>
      <input onChange={e => setLectureName(e.target.value)} />

      <h2 className="text-xl font-semibold">Lecture Link</h2>
      <input onChange={e => setLectureLink(e.target.value)} />

      <h2 className="text-xl font-semibold">Notes Link</h2>
      <input onChange={e => setNotesLink(e.target.value)} />

      <h2 className="text-xl font-semibold">PSET Link</h2>
      <input onChange={e => setPSETLink(e.target.value)} />

      <h2 className="text-xl font-semibold">PSET Solutions Link</h2>
      <input onChange={e => setPSETSolsLink(e.target.value)} />

      <button onClick={createNewLesson} disabled={loading} className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Create New Lesson
        </button>

    </div>
  )
}

export default EditACourse