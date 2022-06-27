import { Menu, Dropdown, Button } from "antd";
import { useContext } from "react";
import Context from "../../context_reducer/Context";




export default function({setValue}){

    const onClick = ({key}) => setValue(key)
    const {peopleData} = useContext(Context)
    const items = peopleData.map(person=> {
        const {id, firstName, lastName} = person
        return {
            key : id,
            label : <p>{firstName} {lastName}</p>,
        }
    })
    
    const menu = <Menu items={items} onClick={onClick}/>

    return (
        <Dropdown overlay={menu} placement="topLeft" arrow>
            <Button>Select person</Button>
        </Dropdown>
    )
}