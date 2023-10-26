import { Section } from "./Section";
import * as PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { MyCard } from "./MyCard";



function Beverage(props) {
    const { product } = props;

    const productStyle = {
        color: product.inStock < 1 ? 'gray' : 'black'
    };

    return (
        <Col xs={6} sm={4} md={3} lg={2}>

            <MyCard title={product.name}>
                <div style={productStyle}>
                    <div>{product.price} EUR</div>
                    <hr />
                    <div><i>in stock: {product.inStock}</i></div>
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