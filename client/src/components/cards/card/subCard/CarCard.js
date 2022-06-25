import { Button, Card } from "antd";


export default function({car}){

    const {year, make, model, price} = car


    // const title = `${firstName} ${lastName}`

    return (

            <Card type="inner" style={{margin : "2rem", textAlign: "center"}}>
                {model} - {make} - {price} - {year}
            
                <div style={btnCon}>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                </div>
            </Card>
        
    )
}


const btnCon = {
    display : "flex",
    justifyContent : "space-around",
    marginTop  :"1rem"
}