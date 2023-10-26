import * as PropTypes from "prop-types";
import { Beverages } from "../components/Beverage";
import { useState } from "react";
import { Form } from "react-bootstrap";

Beverages.propTypes = { title: PropTypes.string };

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
            <Beverages title="Drankenlijst"
                products={products.filter(p => p.name.includes(search) || p.price.includes(search))}
                isInitiallyOpen={true} />
        </div>
    );
}
