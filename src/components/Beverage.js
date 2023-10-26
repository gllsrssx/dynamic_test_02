import { Section } from "./Section";
import * as PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { MyCard } from "./MyCard";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Beverage(props) {
    const { product } = props;
    const [inStock, setInStock] = useState(product.inStock);

    const productStyle = {
        color: inStock < 1 ? 'gray' : 'black'
    };

    const handleOrderClick = () => {
        setInStock(inStock - 1);
    }

    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={product.name}>
                <div style={productStyle}>
                    <div>{product.price} EUR</div>
                    {inStock > 0 && <Button disabled={false} onClick={handleOrderClick}>Order</Button>}
                    <hr />
                    <div><i>in stock: {inStock}</i></div>
                </div>
            </MyCard>
        </Col>
    );
}

Beverage.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inStock: PropTypes.number.isRequired,
    })
}

export function Beverages(props) {
    const { products, title, isInitiallyOpen } = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {products.map(p => <Beverage key={p.name} product={p} />)}
        </Section>
    );
}

Beverages.propTypes = {
    products: PropTypes.array,
    title: PropTypes.string
}