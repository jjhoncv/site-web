export const create = async (datap) => {
  const data = await fetch(process.env.API_PRODUCTS, {
    body: JSON.stringify(datap),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};

export const read = async (id = null) => {
  const data = await fetch(process.env.API_PRODUCTS + (id ? "/" + id : ""), {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};

export const update = async (id, datap) => {
  const data = await fetch(process.env.API_PRODUCTS + "/" + id, {
    body: JSON.stringify(datap),
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};

export const remove = async (id) => {
  const data = await fetch(process.env.API_PRODUCTS + "/" + id, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};
