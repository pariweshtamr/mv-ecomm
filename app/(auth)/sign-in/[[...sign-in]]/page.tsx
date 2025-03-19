import { SignIn } from "@clerk/nextjs"
import React from "react"
export function genrateMetadata() {
  return {
    title: "Drive Nepal - Login page",
    description: `Log in to find your local auto parts seller!`,
  }
}
const SignInPage = () => {
  return (
    <div className="h-full w-full grid grid-cols-1">
      <div className="flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  )
}
export default SignInPage
