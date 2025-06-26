import Header from "@/components/header"

const HomeLayout = ({children}) => {
  return (
    <div className="container mx-auto">
        <Header/>
        {children}
    </div>
  )
}
export default HomeLayout