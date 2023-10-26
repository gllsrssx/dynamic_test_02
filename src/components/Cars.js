import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

const COLORS_CAR_CSS = [
    {nameInCar: "blauw", backGroundColorInCss: "blue", colorInCss: "white"},
    {nameInCar: "geel", backGroundColorInCss: "yellow"},
    {nameInCar: "zwart", backGroundColorInCss: "black", colorInCss: "white"},
    {nameInCar: "wit", backGroundColorInCss: "white"},
    {nameInCar: "rood", backGroundColorInCss: "red", colorInCss: "white"},
    {nameInCar: "grijs", backGroundColorInCss: "grey", colorInCss: "white"},
    {nameInCar: "groen", backGroundColorInCss: "green", colorInCss: "white"},
];

//merk op: dit is een gewone functie, geen React-Component
function styleColor(color) {
    const colorCarCss = COLORS_CAR_CSS.find(c => c.nameInCar === color);
    if (!colorCarCss) return;
    return {
        backgroundColor: colorCarCss.backGroundColorInCss,
        color: colorCarCss.colorInCss,
        margin: "0.5em"
    };
}

function CarColor(props) {
    const {color} = props;

    if (!color) return null;
    return <div style={styleColor(color)}>
        kleur: {color} &nbsp;
    </div>;
}

function Car(props) {
    const {car} = props;
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <MyCard title={car.name}>
                {car.brand && <div>merk: {car.brand}</div>}
                {car.type && <div>type: {car.type}</div>}
                {car.note && <div>opm: {car.note}</div>}
                <CarColor color={car.color}/>
            </MyCard>
        </Col>
    );
}

Car.propTypes = {
    car: PropTypes.shape({
        name: PropTypes.string.isRequired,
        brand: PropTypes.string,
        type: PropTypes.string,
        note: PropTypes.string,
        color: PropTypes.string
    })
}

export function Cars(props) {
    const {cars, title, isInitiallyOpen} = props
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {cars.map(c => <Car key={c.id} car={c}/>)}
        </Section>
    );
}

Cars.propTypes = {
    cars: PropTypes.array,
    title: PropTypes.string
};

