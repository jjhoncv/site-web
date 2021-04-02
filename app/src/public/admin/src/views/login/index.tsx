import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "../../components/Container";
import {
  Form,
  FormFoot,
  FormItem,
  FormLabel,
  Input,
} from "../../components/Form";
import { Page, PageBody, PageHead } from "../../components/Page";
import { FloatMessage } from "../../components/Float";
import * as authActions from "../../stores/auth/actions";

import "./style.scss";
import { Loading } from "../../components/Loading";
import { useForm } from "react-hook-form";

export const Login: React.FC<any> = () => {
  const isFetching = useSelector((state: any) => state.auth.isFetching);
  const error = useSelector((state: any) => state.auth.error);
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(authActions.login(data));
  };

  return (
    <Container>
      <>
        {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
        {isFetching && <Loading />}
        <Page>
          <PageHead>
            <h1>Login</h1>
          </PageHead>
          <PageBody>
            <Box type="box-middle">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input
                    fullWidth
                    type="text"
                    name="username"
                    id="username"
                    error={errors.username?.message}
                    ref={register({
                      validate: (value) =>
                        value.length > 0 || "Campo requerido",
                    })}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input
                    fullWidth
                    type="password"
                    name="password"
                    id="password"
                    error={errors.password?.message}
                    ref={register({
                      validate: (value) =>
                        value.length > 0 || "Campo requerido",
                    })}
                  />
                </FormItem>
                <FormFoot>
                  <Input type="submit" value="Login" />
                  <p>
                    Si aún no eres usuario registrate{" "}
                    <NavLink exact to="/register">
                      aquí
                    </NavLink>
                  </p>
                </FormFoot>
              </Form>
            </Box>
          </PageBody>
        </Page>
      </>
    </Container>
  );
};
