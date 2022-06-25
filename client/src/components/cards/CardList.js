import MainCard from "./card/MainCard";
import { Row, Col } from "antd";


export default function({peopleData}){
    

        const mapData = peopleData.map(data=> <MainCard peopleData={data} key={data.id} />)
   
   
    return (
        <div style={style}>
            {mapData}
        </div>
    )
}


const style = {
    display : "grid",
    gridTemplateColumns : "repeat(3, 1fr)",
    gap : "1rem",
    padding : "1rem",
    marginLeft : "16rem"
}