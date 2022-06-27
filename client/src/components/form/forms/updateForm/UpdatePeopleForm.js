import { Input, Form, Button } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_People } from "../../../../graphql/query";

const {Item} = Form



export default function({peopleData}){

    const [updatePeople] = useMutation(UPDATE_People)

    const {id} = peopleData
    // const [, forceUpdate] = useState()

    // useEffect(() => {
    //     forceUpdate({})
    //   }, [])
    const onFinish = (e)=>{
        const {firstName, lastName} = e
        // console.log(id)
        // console.log(firstName)
        // console.log({
        //     id : id
        // })
        updatePeople({
            variables : {
                id,
                firstName,
                lastName
            },
        })
    }

    return (
        <Form onFinish={onFinish} layout="vertical">
            <Item label="New first name" name="firstName">
                <Input />
            </Item>

            <Item label="New last name" name="lastName">
                <Input placeholder="New last name"/>
            </Item>

            <Item style={{textAlign : "center"}}>
                <Button htmlType="submit">Update</Button>
            </Item>
        </Form>
    )
}