import Header from "@/components/header"

const HomeLayout = ({children}) => {
  return (
    <div className="">
        <Header/>
        {children}
    </div>
  )
}
export default HomeLayout