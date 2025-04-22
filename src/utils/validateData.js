export const validate = (data) => {
  const errorData = {
    name: "",
    email: "",
    phone: "",
  };

  if (data.name.length < 7)
    errorData.name = "The name must be more than 7 letters";

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email))
    errorData.email = "Invalid email address";

  if (data.phone.length != 11) errorData.phone = "Invalid phone number";

  return errorData;
};
