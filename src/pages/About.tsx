/* Components */
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About";

const about = () => {
    return (
        <>
            <Header />

            <main>
                <About />
            </main>

            <Footer />
        </>
    );
};

export default about;