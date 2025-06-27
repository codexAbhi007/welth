import Header from "@/components/header"

const MainLayout = ({children}) => {
  return (
    <div className="my-32 container mx-auto">
        <Header/>
        {children}
    </div>
  )
}
export default MainLayout