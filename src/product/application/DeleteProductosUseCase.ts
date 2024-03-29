/*import { Product } from '../domain/Productos';
import { ProductRepository } from '../domain/ProductosRepository';

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(productId: number): Promise<boolean> {
    try {
      const product: Product | null = this.productRepository.getProductById(productId);

      if (product) {
        const isDeleted: boolean = this.productRepository.deleteProduct(product.id);

        return isDeleted;
      }
 
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}*/


import { Product } from '../domain/Productos';
import { ProductRepository } from '../domain/ProductosRepository';

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(productId: number): Promise<boolean> {
    try {
      // Esperar a que se resuelva la promesa para obtener el producto
      const product: Product | null = await this.productRepository.getProductById(productId);

      if (product) {
        // Esperar a que se resuelva la promesa para eliminar el producto
        const isDeleted: boolean = await this.productRepository.deleteProduct(product.id);

        return isDeleted;
      }
 
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}