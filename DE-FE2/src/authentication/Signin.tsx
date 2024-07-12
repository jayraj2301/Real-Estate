import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {signinSchema} from '../lib/validation';
import { Link, useNavigate } from "react-router-dom"
import Loader from "@/components/shared/Loader"
import { useToast } from "@/components/ui/use-toast"
import { useUserContext } from "@/context/AuthContext"
import { useSignInAccount } from "@/lib/react-query/queries"
 

function Signin() {

  const {checkAuthUser,isLoading}  = useUserContext()
  const navigate = useNavigate()
  const {toast} = useToast()

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      email:"",
      password:""
    },
  })
  const {mutateAsync: signInUserAccount, isPending : isSigningAccount} = useSignInAccount()

  // 2. Define a submit handler.
  const handleSignIn = async (user: z.infer<typeof signinSchema>) => {
    try {
      const session = await signInUserAccount(user)

      if(!session){
        toast({title: "Login failed! Please try again."})
        return
      }
      const isLoggedIn = await checkAuthUser()

      if (isLoggedIn) {
        form.reset()
        navigate("/")
      }else{
        toast({title: "Login failed! Please try again."})
        return
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-[420px] flex justify-center items-center flex-col ">

        <h2 className="text-3xl mb-1">Log in to your account</h2>
        <p className="mb-2 text-slate-400 text-sm">Welcome back! ,Please enter your account details</p>
        <form onSubmit={form.handleSubmit(handleSignIn)} className="flex text-slate-600 flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter name" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="button">
            {isLoading? <div className="flex justify-center items-center gap-2"><Loader />Loading...</div>: "Sign Up"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-purple-500 text-sm font-semibold ml-1">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default Signin