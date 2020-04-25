import { Request, Response } from "express";

import createUser from "./services/CreateUser";

const helloWorld = (req: Request, res: Response) => {
  const user = createUser({
    email: "luis.geniole@gmail.com",
    password: "123123",
    projects: ["automaton", "Soundboard", "Vending Machine"],
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "Javascript", experience: 100 },
      { title: "Ruby", experience: 300 },
    ],
  });

  console.log(user.email);

  return res.json({ message: "Sup guys!" });
};

export { helloWorld };
