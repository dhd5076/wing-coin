import Link from 'next/link'
import { 
    FaWallet,
    FaPaperPlane,
    FaUser,
    FaDownload
} from 'react-icons/fa'

export default function Layout({ children }) {
  return (
    <div className="max-w-lg rounded m-auto">
        <nav className="bg-teal-600 flex justify-between rounded-t-xl">
            <div>
                <h1 className="font-bold text-2xl text-white mr-4 ml-4 my-4">
                    <img src="logo.png" className="h-8"/>
                </h1>
            </div>
            <div className="flex text-teal-900">
                <ul className="flex m-auto">
                    <li className="mr-2 px-2 hover:text-teal-300">
                        <Link href="/wallets" className="text-2xl">
                            <FaWallet/>
                        </Link>
                    </li>
                    <li className="mr-2 px-2 hover:text-teal-300">
                        <Link href="/send" className="text-2xl">
                            <FaPaperPlane/>
                        </Link>
                    </li>
                    <li className="mr-2 px-2 hover:text-teal-300">
                        <Link href="/account" className="text-2xl">
                            <FaUser/>
                        </Link>
                    </li>
                    <li className="mr-2 px-2 hover:text-teal-300">
                        <Link href="/miner" className="text-2xl">
                            <FaDownload/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div>
            <div className='p-4 bg-teal-100 rounded-b-xl bg-opacity-50'>
                {children}
            </div>
            <div className="text-center mt-4 text-teal-900 font-bold bottom">
                Created With ❤️ By <a className="hover:text-teal-100" href="https://github.com/dhd5076">Dylan Dunn</a>
            </div>
        </div>
    </div>
  )
}