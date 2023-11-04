import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
//   const actions = bindActionCreators(actionCreators, dispatch);
  const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h6>Deposite/ Withdraw money</h6>
      {/* Deposite 50 Rs
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.depositeMoney(50))}
      >
        +
      </button>
      Withdraw 50 Rs
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.withdrawMoney(50))}
      >
        -
      </button> */}
      Deposite 50 Rs
      <button
        className="btn btn-primary mx-2"
        onClick={() => depositeMoney(50)}
      >
        +
      </button>
      Withdraw 50 Rs
      <button
        className="btn btn-primary mx-2"
        onClick={() => withdrawMoney(50)}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
