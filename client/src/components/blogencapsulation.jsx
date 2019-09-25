import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap/';

class BlogEncapsulation extends Component {
    render() {
        return (
            <Row>
                <Col>
                    {this.props.header}
                </Col>
                <Col>
                    {this.props.body}
                </Col>
            </Row>
        );
    }
}

export default BlogEncapsulation;
