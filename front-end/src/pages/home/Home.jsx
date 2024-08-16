


import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Switch from "../../components/switch/Switch";
import SwitchData from "../../components/switch/SwichData";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Sidebar/>
      
      <Switch/>
      <SwitchData />
    </div>
  );
};
export default Home;