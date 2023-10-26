import {Section} from "./Section";
import {Button, Col} from "react-bootstrap";

export function EventDemo(props) {
    const {isInitiallyOpen} = props;
    return <Section title="events" isInitiallyOpen={isInitiallyOpen}>
        <Col xs={12}>
            <button className="m-2"
                    onClick={() => {
                        alert("button is clicked");
                    }}>click me please!
            </button>
        </Col>
        <Col xs={12}>
            <Button className="m-2"
                    onClick={e => {
                        alert(`bootstrap button is clicked - pos: (${e.clientX}, ${e.clientY})`);
                    }}>click me please!
            </Button>
        </Col>
        <Col xs={12}>
            <div style={{backgroundColor: "pink"}} className="m-2 p-1"
                 onClick={() => {
                     alert("DIV is clicked");
                 }}>
                <p>Dit is een div. Op deze div zit een event handler.</p>
                <a href="http://google.com"
                   onClick={(e) => {
                       e.preventDefault();
                       e.stopPropagation();
                       alert("link is clicked");
                   }}>dit is een link met een href</a>
                &nbsp;- en -&nbsp;
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        alert("button is clicked");
                    }}>
                    dit is een button
                </Button>
            </div>
        </Col>
    </Section>;
}