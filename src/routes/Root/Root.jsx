import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Root.css"

export default function Root() {
    return (
        <div className="site-container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};