const BASE_URL = "http://localhost:3000/contacts";

const MakeContactPersonApi = () => {
  return BASE_URL;
};

const DeleteContactApi = (id) => {
  return `${BASE_URL}/${id}`;
};

const UPdateContactApi = (id) => {
  return `${BASE_URL}/${id}`;
};

const SearchContactApi = (id) => {
  return `${BASE_URL}?q=${id}`;
};

export {
  MakeContactPersonApi,
  DeleteContactApi,
  UPdateContactApi,
  SearchContactApi,
};
