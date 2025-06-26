import Header from "@/components/header"

const HomeLayout = ({children}) => {
  return (
    <div >
        <Header/>
        {children}
    </div>
  )
}
export default HomeLayout