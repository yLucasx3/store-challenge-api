export const productPaths = {
  "/products": {
    get: {
      summary: "Get all products",
      description: "Get a list of all products",
      produces: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "offset",
          required: false,
          description: "Offset for pagination",
          schema: {
            type: "number",
          },
        },
        {
          in: "query",
          name: "limit",
          required: false,
          description: "Limit for the number of items to return",
          schema: {
            type: "number",
          },
        },
        {
          in: "query",
          name: "filter",
          required: false,
          description: "Filter products based on a field and value",
          schema: {
            type: "object",
            properties: {
              field: {
                type: "string",
                description: "Field to filter on",
              },
              value: {
                type: "string",
                description: "Value to filter for",
              },
            },
          },
        },
      ],
      responses: {
        200: {
          description: "Successful operation",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  items: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Product",
                    },
                  },
                  pageInfo: {
                    type: "object",
                    properties: {
                      totalItems: {
                        type: "number",
                        description: "Total number of items",
                      },
                      totalPages: {
                        type: "number",
                        description: "Total number of pages",
                      },
                      currentPage: {
                        type: "number",
                        description: "Current page number",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    post: {
      summary: "Create a new product",
      description: "Create a new product with the provided information",
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
                  description: "Name of the product",
                },
                price: {
                  type: "number",
                  description: "Price of the product",
                },
                description: {
                  type: "string",
                  description: "Description of the product",
                },
                image: {
                  type: "string",
                  description: "URL of the product image",
                },
              },
              required: ["name", "price", "description", "image"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Product created successfully",
        },
        400: {
          description: "Bad request - Invalid product information",
        },
      },
    },
  },
  "/products/{id}": {
    get: {
      summary: "Get a product by ID",
      description: "Get detailed information about a product by its ID",
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID of the product",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Product content",
        },
        404: {
          description: "Product not found",
        },
      },
    },
    put: {
      summary: "Update a product by ID",
      description: "Update the information of a product by its ID",
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID of the product",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Updated name of the product",
                },
                price: {
                  type: "number",
                  description: "Updated price of the product",
                },
                description: {
                  type: "string",
                  description: "Updated description of the product",
                },
                image: {
                  type: "string",
                  description: "Updated URL of the product image",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Product updated successfully",
        },
        400: {
          description: "Bad request - Invalid product information",
        },
        404: {
          description: "Product not found",
        },
      },
    },
    delete: {
      summary: "Delete a product by ID",
      description: "Delete a product by its ID",
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID of the product",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        204: {
          description: "Product deleted successfully",
        },
        404: {
          description: "Product not found",
        },
      },
    },
  },
};
