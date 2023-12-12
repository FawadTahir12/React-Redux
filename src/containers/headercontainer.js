import { connect } from "react-redux";
import Header from "../components/header";


const mapStateToProps = (state) => ({
    cardItems: state.cardItems
});


const mapDispatchToProps = (dispatch) =>({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)

