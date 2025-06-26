import { SignIn } from "@clerk/nextjs"


const page = () => {
  return (
    <SignIn forceRedirectUrl="/dashboard"/>
  )
}
export default page