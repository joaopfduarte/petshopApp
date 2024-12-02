import BaseApi from './BaseApi';

class ServiceApi extends BaseApi{

    getServicos(setData){
        const method = "GET";
        const url = `${this.baseUrl}api/v1/servico/`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getServico(setData, id){
        const method = "GET";
        const url = `${this.baseUrl}api/v1/servico/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    createServico(service){
        const method = "POST";
        const url = `${this.baseUrl}api/v1/servico/`;
        console.log(url);
        super.myFetch({}, method, url, service);
    }

    updateServico(service){
        const method = "PUT";
        const url = `${this.baseUrl}api/v1/servico/`;
        console.log(url);
        super.myFetch({}, method, url, service);
    }

    deleteServico(id){
        const method = "DELETE";
        const url = `${this.baseUrl}api/v1/servico/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default ServiceApi;