"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <div className="h-screen">
      {/* button */}
      <div className="absolute top-10 left-10 flex items-center gap-4 group">
        <Button
          onClick={() => router.back()}
          variant={"outline"}
          className="text-h4 group-hover:text-coral-900 flex gap-8 items-center cursor-pointer"
        >
          <span className="group-hover:text-coral-900 duration-100 ease-linear text-lg font-bold">
            &larr;
          </span>
        </Button>
      </div>
      {children}
    </div>
  )
}
export default AuthLayout
