import {useEffect, useState} from "react";
import WarehouseTable from "./WarehouseTable";
import {Table} from "react-bootstrap";



export default function NovaPoshta(){
    const key = "f9c220280597174aa121d9791a64f739"
    const [areas, setAreas] = useState([])
    const [cities, setCities]  = useState([])
    const [warehs, setWarehs] = useState([])
    const [selectedWarehouse, setSelectedWarehouse] = useState([])
    useEffect(()=>{
        getAreas()
    },[])


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


    }
    const ChangeSelectedArea = (ev) => {
        let data =  {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getCities",
            "methodProperties": {
                "AreaRef" : ev.target.value,
                  }
        }

        fetch('https://api.novaposhta.ua/v2.0/json/',{
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res=>{
                return res.json()
            })
            .then(inCities =>{
                console.log(inCities)
                setCities(inCities.data)
            })
            .catch(err =>{
                console.log("err")
                console.log(err)

            })

    }
    const getCity = (ev) => {
        let data = {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "CityRef": ev.target.value,
            }
        }

        fetch('https://api.novaposhta.ua/v2.0/json/',{
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res=>{
                return res.json()
            })
            .then(inWarehs =>{
               setWarehs(inWarehs.data)
                setSelectedWarehouse(inWarehs.data[0])
                console.log(inWarehs.data)



            })
            .catch(err =>{
                console.log("err")
                console.log(err)

            })

    }
    const getWarehouse  =(e) =>{
        setSelectedWarehouse(warehs.find((wareh) => wareh.SiteKey === e.target.value))
        console.log(selectedWarehouse)
    }

    return(
        <>
           {/* <button type="button" onClick={getAreas}>GET AREAS</button>*/}
            <select onChange={ChangeSelectedArea}>
                {areas.map(area=>(
                    <option key={area.Ref} value={area.Ref}>{area.Description}</option>
                ))}
            </select>
            <select onChange={getCity}>
                {cities.map(city=>(
                    <option key={city.Ref} value={city.Ref}>{city.Description}</option>
                ))}
            </select>
            <select onClick={getWarehouse}>
                {warehs.map (wareh => (
                    <option key={wareh.SiteKey} value={wareh.SiteKey}>{wareh.Description}</option>
                ))}
            </select>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th colSpan={3}>{selectedWarehouse.CityDescription}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Адреса</th>
                    <td>{selectedWarehouse.Description }</td>
                </tr>
                <tr>
                    <th>Цифрова адреса</th>
                    <td>{selectedWarehouse.WarehouseIndex}</td>
                </tr>
                <tr>
                    <th>Обмеження ваги:</th>
                    <td>ДО  {selectedWarehouse.PlaceMaxWeightAllowed} КГ</td>
                </tr>
                <tr>
                    <th>Обмеження за габаритами (см)</th>

{/*
                    <td>{selectedWarehouse["ReceivingLimitationsOnDimensions"]["Height"]} X {selectedWarehouse["ReceivingLimitationsOnDimensions"]["Length"]} X {selectedWarehouse["ReceivingLimitationsOnDimensions"]["Width"]}</td>
*/}

                </tr>

                </tbody>
            </Table>
        </>
    )
}