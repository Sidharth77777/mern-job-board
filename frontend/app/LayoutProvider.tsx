import Footer from "./components/Footer"
import Header from "./components/Header"
import ToasterProvider from "./components/Toaster"

export const LayoutProvider = ({children}: {children:React.ReactNode}) => {
    return (
        <div>
            <Header />
            {children}
            <ToasterProvider />
            <Footer />
        </div>
    )
}