import { Button } from "./components/ui/Button";
import { Htag } from "./components/ui/Htag";

const App = () => {
    return (
        <>
            <div>
                <Button appearance="gray">Read Smth</Button>
                <Button appearance="purple">Continue</Button>
                <Button appearance="red">Discard</Button>
            </div>
            <div>
                <Htag tag="h1">Hello, h1!</Htag>
                <Htag tag="h2">Hello, h2!</Htag>
                <Htag tag="h3">Hello, h3!</Htag>
                <Htag tag="h4">Hello, h4!</Htag>
            </div>
        </>
    );
};

export default App;
