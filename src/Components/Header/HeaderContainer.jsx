import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          let { id, email, login } = res.data.data;
          this.props.setUserData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
