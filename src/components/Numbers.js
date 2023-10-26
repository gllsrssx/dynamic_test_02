import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

function Number(props) {
    const {number, onSelect, isMarked} = props;
    return (
        <Col xs={4} sm={3} md={2} xxl={1}>
            <MyCard onSelect={() => onSelect && onSelect(number)} isMarked={isMarked}>{number}</MyCard>
        </Col>
    );
}

export function Numbers(props) {
    const {numbers, title, isInitiallyOpen, onSelectNumber, markedNumbers} = props
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {numbers.map((n, i) =>
                <Number key={i}
                        number={n}
                        isMarked={markedNumbers?.includes(n)}
                        onSelect={onSelectNumber}/>)}
        </Section>
    );
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string,
    isInitiallyOpen: PropTypes.bool,
    markedNumbers: PropTypes.arrayOf(PropTypes.number),
    onSelectNumber: PropTypes.func
};