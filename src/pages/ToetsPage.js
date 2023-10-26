import * as PropTypes from "prop-types";
import { Products } from "../components/Products";
import { useState } from "react";
import { Form } from "react-bootstrap";

Products.propTypes = { title: PropTypes.string };

export function ToetsPage(props) {
    const { products } = props;
    const [search, setSearch] = useState("");
    console.log(products)
    return (
        <div className="mx-3">
            <div className="m-3">
                <Form>
                    <Form.Label>Drankenlijst</Form.Label>
                    <Form.Control
                        value={search}
                        onChange={e => setSearch(e.target.value)} />
                </Form>
            </div>
            <Products title="Drankenlijst"
                products={products.filter(p => p.name.includes(search) || p.price.includes(search))}
                isInitiallyOpen={true} />
        </div>
    );
}

// export function ToetsPage(props) {
//     const {products} = props;
//     return (
//         <div className="mx-3">
//             <MenuCard products={products}/>
//         </div>
//     );
// }


// ToetsPage.propTypes = {
//     products: PropTypes.arrayOf(PropTypes.object).isRequired
// }