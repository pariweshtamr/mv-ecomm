import { SignUp } from "@clerk/nextjs"

export function genrateMetadata() {
  return {
    title: "Drive Nepal - Register page",
    description: `Register to find your local auto parts seller!`,
  }
}
const SignUpPage = () => {
  return (
    <div className="h-full w-full grid grid-cols-1">
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  )
}
export default SignUpPage
