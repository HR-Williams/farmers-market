import React from "react";
import ScheduleList from "./ScheduleList.js"
import MarketProduceList from "./MarketProduceList.js";

class Market extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <MarketProduceList />
      buttonText = "Show Daily Schedule";
    }else {
      currentlyVisibleState = <ScheduleList />
      buttonText = "Display Monthly Produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default Market;