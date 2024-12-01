import {Link} from "react-router-dom";
import ServiceForm from "./ServiceForm";

function ServiceIncluir(){
    return(
        <>
            <Link to={"/"}>Home</Link> / <Link to={"/service/list"}>Lista de serviços</Link> / Pet Incluir

            <h1>Incluir serviço:</h1>
            <br/>
            <PetForm />
        </>

    );
}

export default ServiceIncluir;
