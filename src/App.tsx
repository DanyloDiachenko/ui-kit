import { Button } from "./components/ui/Button";
import { Checkbox } from "./components/ui/Checkbox";
import { Heading } from "./components/ui/Heading";
import { Input } from "./components/ui/Input";
import { Paragraph } from "./components/ui/Paragraph";
import { Textarea } from "./components/ui/Textarea";
import { Link } from "react-router";
import { RadioButton } from "./components/ui/RadioButton";
import { useState } from "react";

const App = () => {
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

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
                <Textarea placeholder="Type lot of text here..." />
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Checkbox title="my checkbox 1" id="my-checkbox-1" />
                <Checkbox title="my checkbox 2" id="my-checkbox-2" />
                <Checkbox title="my checkbox 3" id="my-checkbox-3" />
                <Checkbox title="my checkbox 4" id="my-checkbox-4" />
            </div>
            <div style={{ marginTop: "20px" }}>
                <RadioButton
                    id="apple"
                    label="Apple"
                    checked={selectedRadio === "apple"}
                    onChange={() => setSelectedRadio("apple")}
                />
                <RadioButton
                    id="pear"
                    label="Pear"
                    checked={selectedRadio === "pear"}
                    onChange={() => setSelectedRadio("pear")}
                />
                <RadioButton
                    id="orange"
                    label="Orange"
                    checked={selectedRadio === "orange"}
                    onChange={() => setSelectedRadio("orange")}
                />
            </div>
        </>
    );
};

export default App;
