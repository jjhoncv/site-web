import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import {
  FloatMessage,
  FloatMessageBody,
  FloatMessageOptions,
} from "../../components/Float";
import { Page, PageHead, PageBody } from "../../components/Page";
import { Table } from "../../components/Table";
import { Button } from "../../components/Form";

import * as productActions from "../../stores/product";
import { Loading } from "../../components/Loading";

const Option: React.FC<any> = ({ id, handleDelete, ...props }) => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickEdit = () => {
    history.push("products/edit/" + id, { product: props });
  };

  const handleAceptarClick = () => {
    dispatch(productActions.remove(id));
    handleDelete && handleDelete();
  };
  return (
    <>
      <FloatMessage show={show} hide={() => setShow(false)}>
        <FloatMessageBody>
          ¿Esta seguro de eliminar el registro?
        </FloatMessageBody>
        <FloatMessageOptions align="left">
          <Button handleClick={() => handleAceptarClick()}>Aceptar</Button>
          <Button outline handleClick={() => setShow(false)}>
            Cancelar
          </Button>
        </FloatMessageOptions>
      </FloatMessage>
      <span onClick={() => handleClickEdit()}>Edit</span>
      <span onClick={() => setShow(true)}>Remove</span>
    </>
  );
};

export const ProductList = ({ location, ...props }) => {
  const isFetching = useSelector((state: any) => state.product.isFetching);
  const data = useSelector((state: any) => state.product.data);
  const error = useSelector((state: any) => state.product.error);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(productActions.read());
  };

  React.useEffect(() => {
    if (data.length === 0) {
      dispatch(productActions.read());
    }
  }, [data]);

  return (
    <Container>
      {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
      {isFetching && <Loading />}
      <Page>
        <PageHead>
          <h1>Products</h1>
        </PageHead>
        <PageBody>
          <Table
            Component={(props) => (
              <Option {...props} handleDelete={handleDelete} />
            )}
            grid={data}
          />
        </PageBody>
      </Page>
    </Container>
  );
};
