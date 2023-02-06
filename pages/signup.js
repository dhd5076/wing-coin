import Link from "next/link"
import Layout from "../components/Layout"

export default function SignUp() {
  return (
    <Layout>
        <form className="">
          <input 
            placeholder="Username" 
            name="username"
            className="ease-in-out focus:outline-none focus:border-teal-900 w-full font-normal border border-solid text-teal-900 border-teal-500 rounded-xl px-4 py-2 border-teal-900">
          </input>
          <input 
            placeholder="Password"
            name="password"
            type="password" 
            className="mt-4 ease-in-out focus:outline-none focus:border-teal-900 w-full font-normal border border-solid text-teal-900 border-teal-500 rounded-xl px-4 py-2 border-teal-900">
          </input>
          <input 
            placeholder="Re-Type Password" 
            name="password2"
            type="password" 
            className="mt-4 ease-in-out focus:outline-none focus:border-teal-900 w-full font-normal border border-solid text-teal-900 border-teal-500 rounded-xl px-4 py-2 border-teal-900">
          </input>
          <button
              type="button"
              class="ease-in-out font-bold transition duration-300 hover:bg-teal-500 bg-teal-700 px-4 py-2 text-white rounded-xl mt-4 w-full">
              Sign Up
          </button>
          <p className="mt-2 text-sm text-teal-900"> 
            Already A Fella?&nbsp;
            <Link className="text-teal-900 font-bold hover:text-teal-700 hover:underline" href="/">
              Login
            </Link>
          </p>
        </form>
    </Layout>
  )
}
