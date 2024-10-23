import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';
import Header from "./components/Header.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"
import Education from "./components/Education.tsx"
import Employment from "./components/Employment.tsx"
import Achievements from "./components/Achievements.tsx"
import References from "./components/References"
import Projects from "./components/Projects.tsx"
import Home from "./components/Home.tsx"
import {styled} from "styled-components";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 130vh;
    @media screen and (max-width:750px){
    flex-direction: column;
    }
`

function Root(){
    return (
        <>
            <Header />
            <Container>
            <Navbar />
            <Routes>
                <Route path={`/`} element={<Home />}  />
                <Route path={`/education`} element={<Education />}  />
                <Route path={`/employment`} element={<Employment />}  />
                <Route path={`/Achievements`} element={<Achievements />}  />
                <Route path={`/references`} element={<References />}  />
                <Route path={`/projects`} element={<Projects />}  />
            </Routes>

            <main />
            </Container>
            <Footer />
        </>
    )
}

const router = createBrowserRouter(
    [{path: '*', Component: Root}]

)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
