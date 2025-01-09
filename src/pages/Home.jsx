import React from 'react';
import { Carousel, Card, Col, Row, Button } from 'react-bootstrap';
import { FaHome, FaBuilding, FaWater, FaClipboardList, FaVoteYea, FaHandHoldingUsd, FaBusAlt, FaClipboardCheck, FaCogs } from 'react-icons/fa'; // Example icons

const Home = () => {
  return (
    <div className='container-fluid w-100'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://vvcmc.in/wp-content/uploads/2021/12/IMG-20211231-WA0005.jpg" // Replace with your image URL
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to VVCMC</h3>
            <p>Your Gateway to Efficient Civic Services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://vvcmc.in/wp-content/uploads/2021/12/IMG-20211231-WA0005.jpg" // Replace with your image URL
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Empowering Citizens</h3>
            <p>Access services easily, anytime, anywhere.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cards Section */}
      <div className="container mt-5">
        <h2>Online Related Services</h2>
        <p>Your Gateway to Convenient Online Services and Civic Information</p>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <FaHome size={50} color="#4CAF50" />
                <Card.Title>Property Tax</Card.Title>
                <Card.Text>Simplify Your Property Tax Payments Online</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaBuilding size={50} color="#4CAF50" />
                <Card.Title>Right to Service</Card.Title>
                <Card.Text>Access Essential Services with Transparency and Ease</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaWater size={50} color="#4CAF50" />
                <Card.Title>Water Tax</Card.Title>
                <Card.Text>Manage Your Water Tax Efficiently and Hassle-Free</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaClipboardList size={50} color="#4CAF50" />
                <Card.Title>Schemes</Card.Title>
                <Card.Text>Discover and Apply for Beneficial Government Schemes</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaVoteYea size={50} color="#4CAF50" />
                <Card.Title>Election</Card.Title>
                <Card.Text>Stay Informed About Election News and Updates</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaHandHoldingUsd size={50} color="#4CAF50" />
                <Card.Title>E Tenders</Card.Title>
                <Card.Text>Participate in Transparent and Competitive Bidding</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaClipboardCheck size={50} color="#4CAF50" />
                <Card.Title>Complaint Registration</Card.Title>
                <Card.Text>Report Issues and Track Complaints Seamlessly</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FaBusAlt size={50} color="#4CAF50" />
                <Card.Title>VVTS</Card.Title>
                <Card.Text>Explore Reliable and Convenient Transportation Options</Card.Text>
                <Button variant="outline-primary">Know more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
