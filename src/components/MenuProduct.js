import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";

function ProductSize(props) {
    const {product} = props;
    if (!product.size) return;

    return (
        <span className="fs-6 text-primary">
            &nbsp;({product.size}cl)
        </span>
    );
}

function ProductNote(props) {
    const {product} = props;
    if (!product.note) return;

    return (
        <Row className="fs-6 text-primary">
            <Col>
                {product.note}
            </Col>
        </Row>
    );
}

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;

    return (
        <div>
            <Row className="fs-3">
                <Col>
                    {product.name}
                    <ProductSize product={product}/>
                </Col>
                <Col>
                    {product.price} &euro;
                </Col>
            </Row>
            <ProductNote product={product}/>
        </div>
    );
}


MenuProduct.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.number,
        note: PropTypes.string,
    }).isRequired,

}