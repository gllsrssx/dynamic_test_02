import {MenuProduct} from "./MenuProduct";
import PropTypes from "prop-types";
import {Container} from "react-bootstrap";

export function MenuCard(props) {
    const {products} = props;
    return (
        <div>
            <h1>Menu</h1>
            <Container className="p-0">
                {products.map(p => <MenuProduct key={p.name} product={p}/>)}
            </Container>
        </div>
    );
}

MenuCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}