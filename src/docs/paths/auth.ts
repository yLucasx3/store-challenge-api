export const authPaths = {
  "/auth/login": {
    post: {
      summary: "Authenticate a user",
      description: "Authenticates a user using email and password",
      produces: ["application/json"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  description: "Email address of the user",
                },
                password: {
                  type: "string",
                  description: "Password of the user",
                },
              },
              required: ["email", "password"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Authentication successful",
        },
        401: {
          description: "Unauthorized - Invalid credentials",
        },
      },
    },
  },
  "/auth/validate": {
    post: {
      summary: "Validate user information",
      description:
        "Validates user information including name, email, image, and provider account",
      produces: ["application/json"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Name of the user",
                },
                email: {
                  type: "string",
                  format: "email",
                  description: "Email address of the user",
                },
                image: {
                  type: "string",
                  description: "URL of the user's image",
                },
                providerAccount: {
                  type: "string",
                  description: "Provider account information",
                },
              },
              required: ["name", "email", "image", "providerAccount"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Validation successful",
        },
        400: {
          description: "Bad request - Invalid user information",
        },
      },
    },
  },
};
