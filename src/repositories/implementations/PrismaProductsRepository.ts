import { Product } from "../../entities/Product";
import { prisma } from "../../providers/PrismaProvider";
import { IProductsRepository } from "../IProductsRepository";

interface PaginatedResponse {
  items: Product[];
  pageInfo: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}

export class PrismaProductsRepository implements IProductsRepository {
  findById(id: string): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async save(product: Omit<Product, "id">): Promise<Product> {
    const { name, price, description, image } = product;

    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        description,
        image,
      },
    });

    return newProduct;
  }

  async list(
    page: number,
    pageSize: number,
    filter?: { field: keyof Product; value: string | number }
  ): Promise<PaginatedResponse> {
    const skip = (page - 1) * pageSize;

    const totalItems = await prisma.product.count();
    const totalPages = Math.ceil(totalItems / pageSize);

    const items = await prisma.product.findMany({
      skip,
      take: pageSize,
      ...(filter ? { where: { [filter.field]: filter.value } } : {}),
      orderBy: { name: "asc" },
    });

    return {
      items,
      pageInfo: {
        page,
        pageSize,
        totalPages,
        totalItems,
      },
    };
  }
}
