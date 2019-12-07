import React, { Component } from "react";
import "./Pizza.css";
import CustomChatbot from '../CustomChatbot';
import HiddenChatbot from '../HiddenChatbot';
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Tomato from "../tomato/Tomato";
import Mushroom from "../mushroom/Mushroom";
import Corn from "../corn/Corn";
import Veggie from "../veggie/Veggie";
import ButtonGroup from "../buttonGroup/ButtonGroup";

class Pizza extends Component {
  state = {
      tomato: false,
      mushroom: false,
      veggie: false,
      corn: false
  };

  clickEventHandler = (ingredient,from) => {
    if(from=="btn"){
      if (ingredient === "tomato") {
        this.setState({
          tomato: !this.state.tomato
        });
      } else if (ingredient === "mushroom") {
        this.setState({
          mushroom: !this.state.mushroom
        });
      } else if (ingredient === "corn") {
        this.setState({
          corn: !this.state.corn
        });
      } else {
        this.setState({
          veggie: !this.state.veggie
        });
      }
    }
    else{
      if (ingredient === "tomato") {
        this.setState({
          tomato: (from=="true")?true:false
        });
      } else if (ingredient === "mushroom") {
        this.setState({
          mushroom: (from=="true")?true:false
        });
      } else if (ingredient === "corn") {
        this.setState({
          corn: (from=="true")?true:false
        });
      } else {
        this.setState({
          veggie: (from=="true")?true:false
        });
      }
    }
  };

  render() {
    const tomato = this.state.tomato && <Tomato />;
    const mushroom = this.state.mushroom && <Mushroom />;
    const corn = this.state.corn && <Corn />;
    const veggie = this.state.veggie && <Veggie />;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
            </div>
          </div>
          <ButtonGroup eventHandler={this.clickEventHandler} />
          <div style={{display: "none",}}>
            <HiddenChatbot/> 
          </div>
           <CustomChatbot eventHandler={this.clickEventHandler} /> 
        </div>
      </div>
    );
  }
}

export default Pizza;
