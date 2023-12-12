import { connect } from "react-redux";
import Home from "../components/home";
import { addToCart } from "../services/actions/actions";

const mapStateToProps = (state) => ({
    cardItems: state.cardItems
});


const mapDispatchToProps = (dispatch) =>({
    addToCardHandel: data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)

