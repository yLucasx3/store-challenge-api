import { Product } from "../../entities/Product";
import { prisma } from "../../providers/PrismaProvider";
import { IProductsRepository, PaginatedResponse } from "../IProductsRepository";

export class PrismaProductsRepository implements IProductsRepository {
  async findById(id: string): Promise<Product | null> {
    const product = (await prisma.product.findUnique({
      where: { id },
    })) as Product;

    return product;
  }

  async save(product: Omit<Product, "id">): Promise<Product> {
    const { name, price, description, image, discountPercentage } = product;

    const newProduct = (await prisma.product.create({
      data: {
        name,
        price,
        description,
        image,
        discountPercentage,
      },
    })) as Product;

    return newProduct;
  }

  async list(
    offset: number,
    limit: number,
    filter?: Record<string, any>,
    orderBy?: "name" | "price",
    orderDirection?: "asc" | "desc"
  ): Promise<PaginatedResponse> {
    let filterOptions = filter;

    if (filter?.price) {
      filterOptions = { price: Number(filter.price) };
    }

    const [items, totalItems] = await Promise.all([
      prisma.product.findMany({
        skip: offset,
        take: limit,
        ...(filter ? { where: filterOptions } : {}),
        ...(orderBy ? { orderBy: { [orderBy]: orderDirection || "asc" } } : {}),
      }),
      prisma.product.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return {
      items: items as Product[],
      pageInfo: {
        totalItems,
        totalPages,
        currentPage,
      },
    };
  }

  async update(id: string, product: Omit<Product, "id">): Promise<Product> {
    const { name, price, description, image } = product;

    const updatedProduct = (await prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
        image,
      },
    })) as Product;

    return updatedProduct;
  }

  async remove(id: string): Promise<boolean> {
    const removedProduct = await prisma.product.delete({ where: { id } });

    return !!removedProduct;
  }
}
