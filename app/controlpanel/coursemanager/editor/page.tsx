import prisma from "@/lib/prisma"

const CourseEditor = async () => {

  const courses = await prisma.course.findMany()

  console.log(courses)

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">

      <h1 className="font-bold text-2xl test-center">Select Course to Edit</h1>

      <ul>
        {courses.map(course => {
          return <li key={course.id}><a href={`/controlpanel/coursemanager/editor/${course.title}`}>{course.title}</a></li>
        })}
      </ul>

      <br />

        <div className="flex flex-row">

        <a href="/controlpanel/coursemanager/">
          <button className="bg-gray-300 mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Course Manager
          </button>
        </a>

          <a href="/controlpanel">
            <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Back To Control Panel
            </button>
          </a>
        </div>


      </div>
  
  )
}

export default CourseEditor
