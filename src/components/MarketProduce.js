import React from "react";
import PropTypes from "prop-types";
import MarketProduceList from "./MarketProduceList";

function MarketProduce(props){
  return(
    <React.Fragment>
      <h3>{props.month}</h3>
      <p>{props.selection}</p>
    </React.Fragment>
  );
}

MarketProduce.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.arrayOf(PropTypes.string)
  };

export default MarketProduce;