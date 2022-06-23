import { Typography, Menu, Layout } from 'antd';
import { UserOutlined, UserAddOutlined, CarOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


const { Title } = Typography;
const { Sider } = Layout


const getItem = (label, key, icon)=> {
    return {key, icon, label}
}

export default function(){

    const onClick = (e)=>{
        console.log(e.key)
    }

    const items = [
        getItem('Registration', 'reg', <UserAddOutlined />),
        getItem('People', 'people', <UserOutlined />),
        getItem('Cards', 'cards', <CarOutlined />),
    ]

    return (
        <Sider style={siderStyle} width="250">
            <Title level={4} keyboard>People and Cars</Title>
            <Menu items={items} onClick={onClick}/>
        </Sider>
    )
}

const siderStyle = {
    overflow : "auto",
    height : "100vh",
    padding : "1rem"
  }
  