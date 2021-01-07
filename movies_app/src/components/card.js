import React from "react";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";


class CardCustom extends Component {

  render() {

    const mystyle = {
      height: '148px'
    };

    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">
          <h4>{this.props.title}</h4>
        </Popover.Title>

        <Popover.Content>
          <strong>Anno: </strong> {this.props.anno}
          <br></br>
          <hr></hr>
          <strong>Attori: </strong> {this.props.attori}
          <br></br>
          <hr></hr>
          <strong>Awards: </strong> {this.props.awards}
          <br></br>
          <hr></hr>
          <strong>Genere: </strong> {this.props.genere}
          <br></br>
          <hr></hr>
          <strong>trama: </strong> {this.props.trama}
        </Popover.Content>
      </Popover>
    );

    const Example = () => (
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="outline-success">Informazioni</Button>
      </OverlayTrigger>
    );

    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.img}
            style={{ height: "300px" }}
          />
          <Card.Body style={mystyle}>
            <h5>
              <Card.Text>{this.props.title}</Card.Text>
            </h5>
            <Example />
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default CardCustom;
