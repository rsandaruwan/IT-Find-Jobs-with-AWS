import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import { JobsTable } from "../../components/jobs-table/JobsTable.comp";
import jobs from "../../assets/data/dummy-jobs.json";

export const Dashboard = () => {
  return (
    <Container>
        <Row >
            <Col className="text-center mt-5 mb-2">
                <Button variant="info" style={{"fontSize":"2rem", padding:"10px 30px"}}>Add New Job</Button>
            </Col>
        </Row>

        <Row>
            <Col className="text-center mb-2">
                <div>Total Jobs: 50</div>
                <div>Pendibg Jobs: 5</div>
            </Col>
        </Row>

        <Row>
            <Col className="mb-2">
                Recently added Jobs
            </Col>
        </Row>
        <hr/>

        <Row>
            <Col className="resent-jobs">
                <JobsTable jobs={jobs}/>
            </Col>
        </Row>
    </Container>
  )
};
