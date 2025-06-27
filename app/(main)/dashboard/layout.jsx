const layout = ({children}) => {
  return (
    <div className="px-5 w-11/12 md:w-3/4 mx-auto">
      <h1 className="text-6xl font-bold gradient gradient-title mb-5">
        Dashboard
      </h1>
      {children}
    </div>
  )
}
export default layout