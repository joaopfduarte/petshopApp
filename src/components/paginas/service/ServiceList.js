import { Button, Col, Form, Modal, Row, Stack, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import ServiceApi from "../../api/ServiceApi";

function ServiceList() {
    const [show, setShow] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [serviceList, setServiceList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const location = useLocation();

    const serviceApi = new ServiceApi();

    function handleShow(id) {
        setIdDelete(id);
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function handleExcluir() {
        setShow(false);
        serviceApi.deleteServico(idDelete);
        console.log(`Excluido o serviço id: ${idDelete}`);
        consultarEPrecherTable();
    }

    function submitSearchService(e) {
        e.preventDefault();
        consultarEPrecherTable();
    }

    useEffect(() => {
        consultarEPrecherTable();
    }, [location.pathname]);

    function consultarEPrecherTable() {
        serviceApi.getServicos(setServiceList);
    }

    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col xl={10}>
                        <Form onSubmit={submitSearchService}>
                            <Form.Group className="mb-3" controlId="searchText">
                                <Form.Control
                                    type="text"
                                    placeholder="Serviço:"
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xl={2}>
                        <Link to="/service/incluir">
                            <Button>+</Button>
                        </Link>
                    </Col>
                </Row>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.descricao}</td>
                                <td>{item.valor}</td>
                                <td>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="ms-auto">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleShow(item.id)}
                                            >
                                                <BsFillTrashFill />
                                            </Button>
                                        </div>
                                        <div>
                                            <Link to={`/service/alterar/${item.id}`}>
                                                <Button size="sm">
                                                    <BsFillPencilFill />
                                                </Button>
                                            </Link>
                                        </div>
                                    </Stack>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmação</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Confirma a exclusão do serviço {idDelete}?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="danger" onClick={handleExcluir}>
                            Excluir
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default ServiceList;
