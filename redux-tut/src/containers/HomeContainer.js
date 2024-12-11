import { connect } from "react-redux";
import Home from "../components/Home";

import { addToCart } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)), //transferring :- component(data) to dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps);

// export default Home;
