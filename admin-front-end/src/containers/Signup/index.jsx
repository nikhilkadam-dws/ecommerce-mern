import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signup = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col>
                <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email address"
                type="email"
                placeholder="Enter your email address"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value=""
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
