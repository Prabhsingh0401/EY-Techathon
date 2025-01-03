import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import PathSidebar from "../PathsSidebar/PathSidebar";

const LearningPath = () => {
    return(
        <>
        <NavBar></NavBar>
        <div className="w-[90vw] h-[90vh] relative left-[4vw] top-[8vw] mb-[10vw]">
        <PathSidebar></PathSidebar>
        </div>
        <Footer></Footer>
        </>
    )
}

export default LearningPath;