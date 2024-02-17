import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  const [correo, setCorreo] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const validarDatos = (e) => {
    e.preventDefault()
    console.log(correo, descripcion)
    setCorreo('')
    setDescripcion('')
  }

  const tomarDato = (e) => {
    setCorreo(e.target.value)

  }

  const tomarDescripcion = (e) => {
    setDescripcion(e.target.value)
  }

  return (
    <div className="col-12 col-sm-10 col-md-6 mx-auto mt-5">
      <h1> Cuentanos, ¿en que te podemos ayudar? </h1>

      <Form onSubmit={validarDatos}>
        <Form.Group className="mb-3">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            value={correo}
            onChange={tomarDato}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            value={descripcion}
            onChange={tomarDescripcion}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button type="submit" variant="danger"> Enviar </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Contact;
