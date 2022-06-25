import { Typography, Menu, Layout } from 'antd';
import { UserOutlined, UserAddOutlined, CarOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;
const { Sider } = Layout


const getItem = (label, key, icon)=> {
    return {key, icon, label}
}

export default function(){
    const navigate = useNavigate()

    const onClick = (e)=>{
        // console.log(e)
        e.key === "cars" ? navigate("/cars") : 
            navigate("/people")
    }

    const items = [
        // getItem('Registration', 'reg', <UserAddOutlined />),
        getItem('People', 'people', <UserOutlined />),
        getItem('Cars', 'cars', <CarOutlined />),
    ]

    return (
        <Sider style={siderStyle} width="250">
            <Title level={4} keyboard>People and Cars</Title>
            <Menu items={items} onClick={onClick}/>
        </Sider>
    )
}

const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
  }
  