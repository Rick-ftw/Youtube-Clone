import { Col, Divider, Row } from 'antd';
import { Navbar } from './Navbar';
import { Navitem1 } from './Navitem1';

const App = () => (
  <div>
    {/* <Divider orientation="center">Responsive</Divider> */}
    {/* <Row>
      <Col span={6} xs={{ order: 1, }} sm={{ order: 2, }} md={{ order: 3, }} lg={{ order: 4, }} >
        <p>1 col-order-responsive</p>
      </Col>
      <Col
        span={6}
        xs={{
          order: 2,
        }}
        sm={{
          order: 1,
        }}
        md={{
          order: 4,
        }}
        lg={{
          order: 3,
        }}
      >
        <p>2 col-order-responsive</p>
      </Col>
      <Col
        span={6}
        xs={{
          order: 3,
        }}
        sm={{
          order: 4,
        }}
        md={{
          order: 2,
        }}
        lg={{
          order: 1,
        }}
      >
        <p>3 col-order-responsive</p>
      </Col>
      <Col
        span={6}
        xs={{
          order: 4,
        }}
        sm={{
          order: 3,
        }}
        md={{
          order: 1,
        }}
        lg={{
          order: 2,
        }}
      >
        <p>4 col-order-responsive</p>
      </Col>
    </Row> */}

    <Navbar />
    <Navitem1 />
  </div>

);

export default App
