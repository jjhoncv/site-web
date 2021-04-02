export const login = async (param) => {
  const data = await fetch(process.env.API_LOGIN, {
    body: JSON.stringify(param),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    const { user, token } = data.data;
    return { user, token };
  } else {
    throw new Error(data.message);
  }
};

export const register = async (param) => {
  const data = await fetch(process.env.API_REGISTER, {
    body: JSON.stringify(param),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    const { user, token } = data.data;
    return { user, token };
  } else {
    throw new Error(data.message);
  }
};
