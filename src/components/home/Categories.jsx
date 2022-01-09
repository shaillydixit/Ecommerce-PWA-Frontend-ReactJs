import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      MyData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDeatils)
      .then((response) => {
        this.setState({ MyData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const ListCategory = this.state.MyData;
    const MyView = ListCategory.map((ListCategory, i) => {
      return (
        <Col
          key={i.toString()}
          className="p-0"
          key={1}
          xl={2}
          lg={2}
          md={2}
          sm={6}
          xs={6}
        >
          <Link to={'/productcategory/' + ListCategory.category_name}>
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img className="center" src={ListCategory.category_image} />
                <h5 className="category-name">{ListCategory.category_name}</h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
