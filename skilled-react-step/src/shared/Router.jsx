import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Works from "../pages/Works"
import Layout from "./Layout";
import DashBoardLayout from "./DashBoardLayout";
import MyPage from "../pages/MyPage";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
            {/* <Layout> */}
                <Routes>
                    {/* Route */}
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="works/:id" element={<Works />} />
                    <Route path="dashboard" element={<DashBoardLayout />} >
                    <Route path="mypage" element={<MyPage />} />
                    </Route>
                </Routes>
            {/* </Layout> */}
            </BrowserRouter>
        </>
    );
}