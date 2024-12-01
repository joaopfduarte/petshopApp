import {Link, useParams} from "react-router-dom";
import ServiceForm from "./ServiceForm";

function ServiceAlterar(){
    const {id} = useParams(); //Utilizado a partir da versao 6 do react-router.

    return(
        <>
            <Link to={"/"}>Home</Link> / <Link to={"/service/list"}>Lista de serviços</Link> 

            <h1>Alteração de serviço:</h1>
            <br/>
            <ServiceForm id={id}/>
        </>

    );
}

export default ServiceAlterar;