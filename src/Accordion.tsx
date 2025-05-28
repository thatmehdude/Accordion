import { useState } from "react";

type accordionProps = {
    title: string;
    content: string;
}

const Accordion = ({ title, content }: accordionProps) => {
    const [isOpen, setIsopen] = useState(false);
    const toggleAccordion = () => {
        setIsopen(!isOpen)
    }
    return (
        <div className="accordion">
            <div className="accordion-title" onClick={toggleAccordion}>
                {title}
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && (
                <div className="accordion-content">{content}</div>
            )}
        </div>
    );
};

export default Accordion