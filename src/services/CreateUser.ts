// const createUser = (name = "", email: string, password: string) => {
//   const user = { name, email, password };

//   return user;
// };

interface ITech {
  title: string;
  experience: number;
}

interface ICreateUser {
  name?: string;
  email: string;
  password: string;
  projects: string[];
  techs: Array<string | ITech>;
}

const createUser = ({ name = "", email, password }: ICreateUser) => {
  const user = { name, email, password };

  return user;
};

export default createUser;
