import { Alert, Container } from "react-bootstrap";

export function Header(props){
    const boldText = {
        fontWeight: "bold",
      };
    return (
        <Container className="mt-5">
            <Alert variant="success">
                <h6 style={boldText} >{props.text}</h6>
            </Alert>
        </Container>
    );
}