import { Button } from "./components/ui/Button";
import { Heading } from "./components/ui/Heading";
import { Input } from "./components/ui/Input";
import { Paragraph } from "./components/ui/Paragraph";

const App = () => {
    return (
        <>
            <div>
                <Button appearance="gray">Read Smth</Button>
                <Button appearance="purple">Continue</Button>
                <Button appearance="red">Discard</Button>
            </div>
            <div>
                <Heading tag="h1">Hello, h1!</Heading>
                <Heading tag="h2">Hello, h2!</Heading>
                <Heading tag="h3">Hello, h3!</Heading>
                <Heading tag="h4">Hello, h4!</Heading>
            </div>
            <div>
                <Paragraph size="small">Small paragraph</Paragraph>
                <Paragraph size="medium">Medium paragraph</Paragraph>
                <Paragraph size="large">Large paragraph</Paragraph>
            </div>
            <div>
                <Input placeholder="Type here..." />
            </div>
        </>
    );
};

export default App;
