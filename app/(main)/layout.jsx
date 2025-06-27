import Header from "@/components/header"

const MainLayout = ({children}) => {
  return (
    <div className="my-32">
        <Header/>
        {children}
    </div>
  )
}
export default MainLayout