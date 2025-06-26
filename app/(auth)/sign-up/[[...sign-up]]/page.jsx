import { SignUp } from "@clerk/nextjs"


const page = () => {
  return (
    <SignUp forceRedirectUrl="/dashboard"/>
  )
}
export default page