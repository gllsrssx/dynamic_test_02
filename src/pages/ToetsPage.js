import * as PropTypes from "prop-types";
import { Beverages } from "../components/Beverage";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

Beverages.propTypes = { title: PropTypes.string };

export function ToetsPage(props) {
    const { products } = props;

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleMinPriceChange = (e) => {
        const newMinPrice = e.target.value !== '' ? parseFloat(e.target.value) : 0;
        if (newMinPrice > maxPrice) {
            setMaxPrice(newMinPrice);
        }
        setMinPrice(newMinPrice);
    };

    const handleMaxPriceChange = (e) => {
        const newMaxPrice = e.target.value !== '' ? parseFloat(e.target.value) : 0;
        if (newMaxPrice < minPrice) {
            setMinPrice(newMaxPrice);
        }
        setMaxPrice(newMaxPrice);
    };

    console.log(products)
    return (
        <div className="mx-3">
            <div className="m-3">
                <Form>
                    Prijs
                    <Row>
                        <Col>
                            <Form.Control type="number" placeholder="min" value={minPrice} min={0}
                                onChange={handleMinPriceChange} />
                        </Col>
                        <Col>
                            <Form.Control type="number" placeholder="max" value={maxPrice} min={0}
                                onChange={handleMaxPriceChange} />
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
