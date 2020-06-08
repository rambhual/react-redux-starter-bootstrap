import React, { useEffect } from "react";
import { receiveToken } from "../store/actions/user";
import { Button, Label, FormGroup, Input, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = props => {
  const dispatch = useDispatch();
  const { errorMessage, isFetching } = useSelector(state => state);

  useEffect(() => {
    // const params = new URLSearchParams(props.location.search);
    // const token = params.get("token");
    // if (token) {
    //   props.dispatch(receiveToken(token));
    // }
  }, []);
  return (
    <div>
      <div className="auth-page container">
        <p className="widget-auth-info">
          Welcome Back! Please login to your account
        </p>
        <form className="mt">
          {errorMessage && (
            <Alert className="alert-sm" color="danger">
              {errorMessage}
            </Alert>
          )}
          <div className="form-group">
            <Label for="search-input1">Username</Label>
            <input
              className="form-control"
              required
              name="email"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group mb-2">
            <Label for="search-input1">Password</Label>
            <input
              className="form-control"
              type="password"
              required
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <FormGroup className="checkbox abc-checkbox mb-4 d-flex" check>
            <Input id="checkbox1" type="checkbox" />
            <Label for="checkbox1" check className={"mr-auto"}>
              Remember me
            </Label>
            <a href="/">Forgot password?</a>
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            className="auth-btn mb-3"
            size="sm"
          >
            {isFetching ? "Loading..." : "Login"}
          </Button>
          <p className="widget-auth-info text-center">Or</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
