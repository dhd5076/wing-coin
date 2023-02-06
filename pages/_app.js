import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
    <div className="bg-gradient-to-b from-teal-100 to-teal-500 w-screen h-screen grid place-items-center">
        <Component {...pageProps} />
    </div>
    )
}