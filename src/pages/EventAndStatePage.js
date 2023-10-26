import {EventDemo} from "../components/EventDemo";
import {StateDemo} from "../components/StateDemo";

export function EventAndStatePage() {
    return (
        <div>
            <EventDemo/>
            <StateDemo isInitiallyOpen={true}/>
        </div>
    );
}