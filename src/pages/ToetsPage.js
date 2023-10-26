import * as PropTypes from "prop-types";
import { Beverages } from "../components/Beverage";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

Beverages.propTypes = { title: PropTypes.string };

export function ToetsPage(props) {
    const { products } = props;

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    console.log(products)
    return (
        <div className="mx-3">
            <div className="m-3">
                <Form>
                    Prijs
                    <Row>
                        <Col>
                            <Form.Control type="number" placeholder="min" value={minPrice}
                                onChange={e => setMinPrice(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control type="number" placeholder="max" value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)} />
                        </Col>
                    </Row>
                </Form>
            </div>
            <Beverages title="Drankenlijst"
                products={products.filter(p => (p.price >= minPrice || minPrice === 0 || minPrice === '') && (p.price <= maxPrice || maxPrice === 0 || maxPrice === ''))}
                isInitiallyOpen={true} />
        </div>
    );
}
