export const userPaths = {
  "/users": {
    post: {
      summary: "Create a user",
      description: "Create a user",
      produces: ["application/json"],
      responses: {
        200: {
          description: "Successful operation",
        },
        400: {
          description: "Empty user",
        },
      },
    },
  },
};
