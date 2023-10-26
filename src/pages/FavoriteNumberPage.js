import {Numbers} from "../components/Numbers";
import {useState} from "react";
import * as PropTypes from "prop-types";

function SingleFavoriteNumber(props) {
    const {items} = props;
    const [favorite, setFavorite] = useState();

    return <div className="mx-3">
        <Numbers numbers={[...new Set(items)]} title="alle getallen"
                 isInitiallyOpen={true}
                 markedNumbers={[favorite]}
                 onSelectNumber={n => setFavorite(n)}/>
        <div>Mijn favoriete getal is {favorite ?? "(nog niet gekozen)"}</div>
    </div>;
}

SingleFavoriteNumber.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number),
};

function MultipleFavoriteNumbers(props) {
    const {items} = props;
    const [favorites, setFavorites] = useState([]);

    function newArrayWithToggledNumber(clickedNumber) {
        return favorites.includes(clickedNumber) ? favorites.filter(n => n !== clickedNumber) : [...favorites, clickedNumber];
    }

    return <div className="mx-3">
        <Numbers numbers={[...new Set(items)]} title="alle getallen"
                 isInitiallyOpen={true}
                 markedNumbers={favorites}
                 onSelectNumber={n => setFavorites(newArrayWithToggledNumber(n))}/>
        <div>Mijn favoriete getallen zijn {favorites?.length ? favorites.join(", ") : "(nog niet gekozen)"}</div>
    </div>;
}

MultipleFavoriteNumbers.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number),
};

export function FavoriteNumberPage(props) {
    const {numbers} = props;
    return (
        <>
            <SingleFavoriteNumber items={numbers}/>
            <MultipleFavoriteNumbers items={numbers}/>
        </>
    );
}