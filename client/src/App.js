import {BrowserRouter, Routes,Route} from "react-router-dom"
import Form from "./routes/form/Form";
import { AutoComplete, Layout, Menu } from "antd";
import SideBar from "./components/SideBar";

export default function() {
  const { Content } = Layout

  
  return (
    <>
      <Layout>
          <SideBar />
          <Content>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Form />}/>
                <Route path="/ss" element={<Form />}/>
              </Routes>
            </BrowserRouter>
          </Content>
      </Layout>
    </>
  );
}



