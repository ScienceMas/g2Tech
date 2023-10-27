import { Navbar } from "@/components/Navbar";
export default function ProductLayout({children}) {
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}