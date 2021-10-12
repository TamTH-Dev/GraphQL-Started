import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";

import Form from "./components/Form";
import UserList from "./components/UserList";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
      <UserList />
    </ApolloProvider>
  );
}

export default App;
