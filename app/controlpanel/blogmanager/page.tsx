const BlogManager = () => {
    return (
      <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">
        <h1 className="text-2xl font-bold">Blog Manager</h1>
        <br />
  
        <div className="flex flex-row">
  
        <a href="/controlpanel/blogmanager/create">
          <button className="bg-gray-300 mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Write a New Post
          </button>
        </a>
        
        <a href="/controlpanel/coursemanager/editor">
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Edit an Existing Post
          </button>
        </a>

        <a href="/controlpanel/coursemanager/editor">
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Delete an Existing Post
          </button>
        </a>
  
        </div>
  
        <br />
  
        <a href="/controlpanel">
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Back To Control Panel
          </button>
        </a>
  
  
      </div>
    )
  }
  
  export default BlogManager