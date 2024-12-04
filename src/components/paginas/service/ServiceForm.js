import { Col, Row, Form, Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceApi from "../../api/ServiceApi";

function ServiceForm({ id }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const navigate = useNavigate();

  function setService(service) {
    setDescricao(service.descricao);
    setValor(service.valor);
  }

  useEffect(() => {
    if (id) {
      const serviceApi = new ServiceApi();
      serviceApi.getServico(setService, id);
    }
  }, [id]);

  function cadastrarService(e) {
    e.preventDefault();
    const service = { id: id, descricao: descricao, valor: valor };
    const serviceApi = new ServiceApi();
    if (id) {
      serviceApi.updateServico(service);
    } else {
      serviceApi.createServico(service);
    }
    navigate(`/service/list`);
  }

  return (
    <Container>
      <Form onSubmit={cadastrarService}>
        <Row>
          <Col sm="6">
            {id && (
              <Form.Group as={Row} className="mb-3" controlId="id">
                <Form.Label column sm="2">
                  Id.
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly value={id} />
                </Col>
              </Form.Group>
            )}

            <Form.Group as={Row} className="mb-3" controlId="descricao">
              <Form.Label column sm="2">
                Nome
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Serviço"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="valor">
              <Form.Label column sm="2">
                Valor
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Valor do serviço"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Row className="justify-content-md-center">
              <Col xl={12}>
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <Link to="/service/list">
                      <Button variant="danger">Cancelar</Button>
                    </Link>
                  </div>
                  <div className="p-2 ms-auto">
                    <Button variant="primary" type="submit">
                      Confirmar
                    </Button>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      {id} : {descricao} : {valor}
    </Container>
  );
}

export default ServiceForm;
