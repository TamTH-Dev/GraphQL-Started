import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_USER } from "../graphql/Mutations";
import { LOAD_USERS } from "../graphql/Queries";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { error }] = useMutation(ADD_USER, {
    refetchQueries: [LOAD_USERS],
  });

  const resetState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    });
    if (error) console.error(error);
    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
