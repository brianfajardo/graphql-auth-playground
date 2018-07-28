const graphql = require("graphql");

// Types
const UserType = require("./types/user_type");

// Services
const Authentication = require("../services/auth");

const { GraphQLObjectType, GraphQLString } = graphql;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      async resolve(parentValue, { email, password }, req) {
        return await Authentication.signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
