import { Header, HeaderSM } from "../components/Header";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../components/Footer";

interface LayoutProps {
    children: ReactNode
}
export function Layout({ children }: LayoutProps) {
    return (<>
        <Box
            display={["none", "none", "block"]}
        >
            <Box>
                <Header />
            </Box>
        </Box>
        <Box
            display={["block", "block", "none"]}
        >
            <Box >
                <HeaderSM />
            </Box>
        </Box>
        {children}
        <Footer />
    </>)
}