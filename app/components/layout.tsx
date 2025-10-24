import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center selection:bg-green-700 font-sans">
            <div className="md:w-4xl lg:w-4xl sm:max-w-4xl flex flex-col gap-12 p-8 lg:p-20 lg:py-28">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}
