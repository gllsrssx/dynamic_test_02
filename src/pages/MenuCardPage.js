import PropTypes from "prop-types";
import {MenuCard} from "../components/MenuCard";

export function MenuCardPage(props) {
    const {products} = props;
    return (
        <div className="mx-3">
            <MenuCard products={products}/>
        </div>
    );
}


MenuCardPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}