const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const { schema, root } = require("./Schemas");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
