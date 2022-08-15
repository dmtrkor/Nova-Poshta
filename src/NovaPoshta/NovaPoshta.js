import {useState} from "react";
import {ButtonGroup, DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


export default function NovaPoshta(){
    const [areas, setAreas] = useState([])
    const key = "f9c220280597174aa121d9791a64f739"
    const getAreas = () => {
      let data =  {
          "apiKey": key,
          "modelName": "Address",
          "calledMethod": "getAreas",


      }

          fetch('https://api.novaposhta.ua/v2.0/json/',{
              method: "POST",
              body: JSON.stringify(data)
        })
          .then(res=>{
              return res.json()
          })
          .then(inAreas =>{
              console.log(inAreas)
              setAreas(inAreas.data)
          })
          .catch(err =>{
              console.log("err")
              console.log(err)

          })
        console.log("--------------------------")
        console.log(areas)

    }
    return(
        <>
            <button type="button" onClick={getAreas}>GET AREAS</button>
            <div className="mb-2">

                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    {areas.map (area =>(
                        <Dropdown.Item key={area.Ref}>{area.Description}</Dropdown.Item>
                    ))}
                </DropdownButton>

            </div>
        </>
    )
}