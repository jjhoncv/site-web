import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../components/Container";
import { FloatMessage } from "../../components/Float";
import {
  Form,
  FormItem,
  FormLabel,
  Input,
  FormFoot,
  Button,
} from "../../components/Form";
import { Loading } from "../../components/Loading";
import { Page, PageHead, PageBody } from "../../components/Page";
import * as productActions from "../../stores/product";
import { useForm } from "react-hook-form";

export const ProductAdd = ({ history }) => {
  const isFetching = useSelector((state: any) => state.product.isFetching);
  const error = useSelector((state: any) => state.product.error);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(productActions.create(history, data));
  };

  return (
    <Container>
      {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
      {isFetching && <Loading />}
      <Page>
        <PageHead>
          <h1>New Product</h1>
        </PageHead>
        <PageBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Input
                fullWidth
                type="text"
                name="name"
                id="name"
                ref={register()}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Code</FormLabel>
              <Input
                fullWidth
                type="text"
                name="code"
                id="code"
                ref={register()}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Price</FormLabel>
              <Input
                fullWidth
                type="text"
                name="price"
                id="price"
                ref={register()}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Description</FormLabel>
              <Input
                fullWidth
                type="text"
                name="description"
                id="description"
                ref={register()}
              />
            </FormItem>
            <FormFoot align="left">
              <Input type="submit" value="Add product" />
              <Button outline handleClick={() => history.push("/products")}>
                Cancelar
              </Button>
            </FormFoot>
          </Form>
        </PageBody>
      </Page>
    </Container>
  );
};
