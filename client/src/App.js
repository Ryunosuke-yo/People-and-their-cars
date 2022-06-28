import {BrowserRouter, Routes,Route} from "react-router-dom"
import { AutoComplete, Layout, Menu } from "antd";
import PeopleView from "./components/routes/people/PeopleView";
import CarView from "./components/routes/cars/CarView";
import SideBar from "./components/layout/SideBar"
import ShowPage from "./components/routes/showPage/ShowPage";
export default function() {
  const { Content } = Layout

  
  return (
    <>
            <BrowserRouter>
      <Layout>
          <SideBar />
          <Content>
              <Routes>
                <Route path="/" element={<CarView/>}/>
                <Route path="/people">
                    <Route path="view" element={<PeopleView />} />
                    <Route path="show/:personId" element={<ShowPage />}/>
                </Route>
                <Route path="/cars" element={<CarView />}/>
              </Routes>
          </Content>
      </Layout>
            </BrowserRouter>
    </>
  );
}



