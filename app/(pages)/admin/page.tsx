import { SignOutButton, UserButton } from "@clerk/nextjs"

export const revalidate = false

const AdminPage = () => {
  return (
    <div>
      This is admin dashboard
      <SignOutButton />
      <UserButton />
    </div>
  )
}
export default AdminPage
