import Section from "./Section";
import Heading from "./Heading";


// context组件
export default function Context() {
    return (
        <div>
            <h1>Context组件</h1>
            <Section>
                <Heading>标题1</Heading>
                <Section>
                    <Heading>2-1</Heading>
                    <Heading>2-2</Heading>
                    <Heading>2-3</Heading>
                    <Section>
                        <Heading >3-1</Heading>
                        <Heading >3-3</Heading>
                        <Heading >3-3</Heading>
                        <Heading >3-4</Heading>
                    </Section>
                </Section>
            </Section>
        </div>
    )
}