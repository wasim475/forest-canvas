import Banner from "./Bannar/Banner";
import CraftItems from "./CraftItemsSection/CraftItems";
import EditorPack from "./EditorPack/EditorPack";
import MostRecent from "./MostRecent/MostRecent";


const Home = () => {
    return (
        <div>
            <Banner/>
            <CraftItems/>
            <EditorPack/>
            <MostRecent/>
        </div>
    );
};

export default Home;