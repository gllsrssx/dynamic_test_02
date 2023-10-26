import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const {numbers} = props

    return (
        <div className="mx-3" >
            <Numbers numbers={numbers} title="alle getallen" isInitiallyOpen={true}/>
            <Numbers numbers={numbers.filter(n=>n>6)} title="getallen>6"/>
            <Numbers numbers={numbers.map(n=>n*6)} title="getallen*2"/>
        </div>
    );
}