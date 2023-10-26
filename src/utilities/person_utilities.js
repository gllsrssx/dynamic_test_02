export function citiesFromPersonData(persons) {
    const uniqueCityNames = [...new Set(persons.map(p => p.city))];
    const cities = uniqueCityNames.map(c => ({
        name: c,
        numberOfPersons: persons.filter(p => p.city === c).length
    }));
    console.log(cities)
    return cities;
}