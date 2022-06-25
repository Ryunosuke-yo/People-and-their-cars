import {Button, Form, Input, Typography,} from "antd"
import { Link } from "react-router-dom"

const {Item} = Form


export default function({title,onFinish,children}){
    return (
        <div style={{marginLeft : "16rem"}}>
            <div style={formStyle}>
                <Typography.Title level={3} style={{textAlign  :"center"}}>{title}</Typography.Title>
                <Form layout="vertical" onFinish={onFinish}>

                    {children}

                    <Item style={{textAlign : "center"}}>
                        <Button htmlType="submit">Submit</Button>
                    </Item>
                </Form>
        </div>
       </div>
    )
}

const formStyle = {
    width : "80%", 
    padding : "1rem", 
    marginLeft : "auto",
    marginRight : "auto"
}