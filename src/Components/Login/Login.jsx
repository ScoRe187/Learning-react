import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.LoginForm}>
      <h1>Login</h1>
      <span>
        <Field
          type={"text"}
          name={"login"}
          placeholder={"Login"}
          component={"input"}
        />
      </span>
      <span>
        <Field
          type={"password"}
          name={"Password"}
          placeholder={"Password"}
          component={"input"}
        />
      </span>
      <span>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        Remember me.
      </span>
      <span>
        <button>Login</button>
      </span>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  return (
    <div className={s.LoginFormContainer}>
      <ReduxLoginForm />
    </div>
  );
};

export default Login;
