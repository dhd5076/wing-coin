import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
        <form>
          <input 
            placeholder="Username" 
            className="ease-in-out focus:outline-none focus:border-teal-900 w-full font-normal border border-solid text-teal-900 border-teal-500 rounded-xl px-4 py-2 border-teal-900">
          </input>
          <input 
            placeholder="Password" 
            type="password" 
            className="mt-4 ease-in-out focus:outline-none focus:border-teal-900 w-full font-normal border border-solid text-teal-900 border-teal-500 rounded-xl px-4 py-2 border-teal-900">
          </input>
          <div className="w-full mt-2 text-sm text-right mb-4"> 
            <a href="/resetPassword" className="text-teal-900 hover:underline hover:text-teal-700">Forgot Password?</a>
          </div>
          <button
              type="button"
              class="ease-in-out font-bold transition duration-300 hover:bg-teal-500 bg-teal-700 px-4 py-2 text-white rounded-xl mt-4 w-full">
              Login
          </button>
          <p className="mt-2 text-sm text-teal-900"> 
            Not A Fella?&nbsp;
            <a className="text-teal-900 font-bold hover:text-teal-700 hover:underline" href="/signup">
              Create An Account
            </a>
          </p>
        </form>
    </Layout>
  )
}
