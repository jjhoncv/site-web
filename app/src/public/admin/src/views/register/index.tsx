import * as React from "react";
import { Box } from "../../components/Box";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { FloatMessage } from "../../components/Float";
import {
  Form,
  FormItem,
  FormLabel,
  Input,
  FormFoot,
} from "../../components/Form";
import { Page, PageHead, PageBody } from "../../components/Page";
import * as authActions from "../../stores/auth/actions";
import "./style.scss";
import { Loading } from "../../components/Loading";
import { useForm } from "react-hook-form";

export const Register: React.FC<any> = () => {
  const isFetching = useSelector((state: any) => state.auth.isFetching);
  const error = useSelector((state: any) => state.messageAlert.text);
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(authActions.register(data));
  };

  return (
    <Container>
      <>
        {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
        {isFetching && <Loading />}
        <Page>
          <PageHead>
            <h1>Register</h1>
          </PageHead>
          <PageBody>
            <Box type="box-middle">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input
                    fullWidth
                    type="text"
                    name="name"
                    id="name"
                    error={errors.name?.message}
                    ref={register({
                      validate: (value) =>
                        value.length > 0 || "Campo requerido",
                    })}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <Input
                    fullWidth
                    type="text"
                    name="lastname"
                    id="lastname"
                    error={errors.lastname?.message}
                    ref={register({
                      validate: (value) =>
                        value.length > 0 || "Campo requerido",
                    })}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    fullWidth
                    type="text"
                    name="email"
                    id="email"
                    error={errors.email?.message}
                    ref={register({
                      validate: (value) =>
                        value.length > 0 || "Campo requerido",
                    })}
                  />
                </FormItem>
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
                  <Input type="submit" value="Register" />
                  <p>
                    Si yá estas registrado ingresa a{" "}
                    <NavLink exact to="/login">
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
