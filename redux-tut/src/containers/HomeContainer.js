import { connect } from "react-redux";
import Home from "../components/Home";

// container:- 1.) connect redux with react 2.) import react-redux, action and component 3.)use mapDispatchToProps 4.) use mapStateToProps

// component se data react wale store me save karoge tab use karege mapDispatchToProps.

import { addToCart, removeToCart } from "../Services/Actions/actions";

// mapStateToProps: jab use karte he jab DATA 'store' se koe third party me use karna he.

/* Data Transfer from Store to Third Party */
const mapStateToProps = (state) => ({
  // data: state.cardItems,
});

// DATA Transfer:-
// From :-
// click event function:- addToCartHandler, removeToCartHandler
// TO:-
//action function:- addToCart, removeToCart

/* Data Transfer from Component to Action */
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)), //transferring :- component ke event ka (data) to dispatch(action ke function per with data)
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
