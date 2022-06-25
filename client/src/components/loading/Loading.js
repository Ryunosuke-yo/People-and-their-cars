import { Space, Spin } from 'antd';

export default function() {

    return (
    <Space size="middle" style={{display : "flex", justifyContent : "center", paddingLeft :"16rem", marginTop : "12rem", width : "100%"}}>
        <Spin size="large" />
    </Space>
    )

}