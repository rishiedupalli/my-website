const ControlPanel = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">

      <h1 className="text-2xl font-bold">Control Panel</h1>

      <br />

      <a href="/controlpanel/coursemanager">
        <button className="bg-gray-300 mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Course Manager
        </button>
      </a>

      <br />

      <a href="/controlpanel/blogmanager">
        <button className="bg-gray-300 mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Blog Management
        </button>
      </a>
    </div>
  )
}

export default ControlPanel