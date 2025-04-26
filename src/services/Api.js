const BASE_URL = "http://localhost:3000/contacts";

const MakeContactPersonApi = () => {
  return BASE_URL;
};

const DeleteContactApi = (id) => {
  return `${BASE_URL}/${id}`;
};

export { MakeContactPersonApi, DeleteContactApi };
