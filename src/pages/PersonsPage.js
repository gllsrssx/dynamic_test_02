import * as PropTypes from "prop-types";
import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {Cities} from "../components/Cities";
import {citiesFromPersonData} from "../utilities/person_utilities";

Persons.propTypes = {title: PropTypes.string};

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen" isInitiallyOpen={true}/>
            <Persons persons={[...persons].sort((pl, pr) => pr.age - pl.age)} title="alle personen volgens leeftijd"/>
            <Numbers numbers={persons.map(p => p.age)} title="leeftijden"/>
            <Numbers numbers={[...new Set(persons.map(p => p.age))].sort((nl, nr) => nr - nl)}
                     title="unieke leeftijden gesorteerd"/>
            <Cities cities={[{name: "Antwerpen", numberOfPersons: 100}, {name: "Brussel", numberOfPersons: 200}]}
                    title="city test"/>
            <Cities cities={citiesFromPersonData(persons)} title="steden van alle personen"/>
            <Persons persons={persons.filter(p => p.city === "Mechelen").sort((pl, pr) => pr.age - pl.age)}
                     title="alle personen van Mechelen volgens leeftijd"/>

        </div>
    );
}