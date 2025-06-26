import Header from "@/components/header"

const MainLayout = ({children}) => {
  return (
    <div className="container mx-auto my-32">
        <Header/>
        {children}
    </div>
  )
}
export default MainLayout