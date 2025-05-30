import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";

const faqData = [
    {
        question: "How to book a Bus with Urban Cruise?",
        answer:
            "1- Our Travel Advisors will ask few details regarding your Trip to understand your Travel Requirement in detail.2- Most Appropriate Vehicle is suggested for your Trip & Rate Quotation is provided to you. 3- Once you agree with Rate Quotation & decide to provide us an opportunity to serve you, a small booking amount is taken to confirm the booking.",
    },
    {
        question: "Your Services Are Available In Which Cities?",
        answer:
            "We are currently operational in 7 Cities of India- Mumbai, Navi Mumbai, Thane, Delhi, NOIDA, Gurugram & Gaziabad. Very soon we will be adding more cities",
    },
    {
        question: "How Are The Kilometers Calculated?",
        answer:
            " The ‘Kilometres’ are calculated from the Vehicle Garage to Garage basis i.e. Vehicle Garage -> Pickup Point -> Your Dstinations -> Your Drop Point – > Vehicle Garage.We advise you to check the Kilometers before start of the Trip & at the end of the Trip for your satisfaction.",
    },
    {
        question: "What Are The Payment Terms?",
        answer:
            "You can confirm your booking reservation by paying a small booking fee.The balance amount to be paid before the start of the journey at the time of boarding the vehicle.",
    },
    {
        question: "What About The Toll, State Taxes / Entry Fees & Parking Charges?",
        answer:
            "Its advisable to pay Toll, Parking, State Taxes / Entry Fees directly by you to the Authorities during the Trip.",
    },
    {
        question: "What If I Am Carrying More Luggage?",
        answer:
            "You need to specify the accurate no. of Luggage Bags with approx.. size (medium/Large)Based on details provided by you, a vehicle with Luggage Carrier on Roof will be provided to you.If that is also not sufficient, then you can ask for a Larger Capacity vehicle to accommodate more Luggage",
    },
    {
        question: "What Happens If The Vehicle Breaks Down?",
        answer:
            " Since we work with the best operators, the vehicles are usually reliable.In case of minor issue, Operator gets it rectified till you enjoy your trip. However, if required, operator will change the vehicle (if possible).",
    },
    {
        question: "How To Get In Touch With You, If I Have Additional Questions?",
        answer:
            " You can call or drop a message on our Customer Care No. (+918369681231)OR write to us at booking@urbancruise.in. One of our customer service executives will reach out to you.",
    },
];

const Faq = () => {
    return (
        <div style={{ backgroundColor: "#FFECD9", padding: "50px 0" }}>
            <Container>
                <div className="text-center mb-5">
                    <h5 className="badge fs-4" style={{ backgroundColor:'#FFE6AC', color:'#F7941D', fontWeight: 'normal'}}>FAQ’S</h5>
                    <h2 className="fw-bold">FREQUENTLY ASKED QUESTIONS</h2>
                </div>
                <Row>
                    <Col md={6}>
                        <Accordion defaultActiveKey="">
                            {faqData.slice(0, 4).map((item, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
                                    <Accordion.Header>
                                        <strong>{item.question}</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>{item.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                    <Col md={6}>
                        <Accordion defaultActiveKey="">
                            {faqData.slice(4).map((item, index) => (
                                <Accordion.Item eventKey={(index + 4).toString()} key={index + 4} className="mb-3">
                                    <Accordion.Header>
                                        <strong>{item.question}</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>{item.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;
