import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_USERS } from "../graphql/Queries";

const UserList = () => {
  const { loading, error, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (error) {
      return console.error(error);
    }
    if (!data) return;
    console.log(data)
    setUsers(data.getUsers);
  }, [data, loading, error]);

  return (
    <div>
      {users.map((user) => (
        <div style={{ display: "flex", rowGap: "1rem" }} key={user.id}>
          <span style={{flex: 1}}>{user.firstName}</span>
          <span style={{flex: 1}}>{user.lastName}</span>
          <span style={{flex: 1}}>{user.email}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
