import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

function Person(props) {
    const {person} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={person.name}>
                <div>{person.age}</div>
                <div>{person.city}</div>
            </MyCard>
        </Col>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
    })
}

export function Persons(props) {
    const {persons, title, isInitiallyOpen} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {persons.map(p => <Person key={p.id} person={p} />)}
        </Section>
    );
}

Persons.propTypes = {
    persons: PropTypes.array,
    title: PropTypes.string
}