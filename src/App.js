import Posts from "./Posts";
import {useDispatch} from "react-redux";
import {forceSaga} from "./store/posts/actions";
import {connect} from "react-redux";

function App({alert}) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(forceSaga)
    }
    return (
        <div className="container pt-3">
            {alert && <div className="alert alert-warning" role="alert">
                {alert}
            </div>}
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >Force saga</button>
            <Posts />
        </div>
    );
}

export default connect(state => ({
    alert: state.app.alert
}))(App);
