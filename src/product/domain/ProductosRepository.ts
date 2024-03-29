/*import { Product } from './Productos';

export class ProductRepository {
  public products: Product[] = [];
  public nextId: number = 1;

  addProduct(product: Product): Product {
    const newProduct = new Product(this.nextId++, product.name, product.description, product.price,);
    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(productId: number): Product | null {
    const product = this.products.find((p) => p.id === productId);
    return product ? { ...product } : null;
  }

  getAllProducts(): Product[] {
    return this.products.map((product) => ({ ...product }));
  } 
 
  updateProduct(updatedProduct: Product): Product | null {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);

    if (index !== -1) {
      this.products[index] = { ...updatedProduct };
      return { ...updatedProduct };
    }

    return null;
  }

  deleteProduct(productId: number): boolean {
    const index = this.products.findIndex((p) => p.id === productId);

    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}*/

import { Product } from './Productos';

interface ProductRepository {
  addProduct(product: Product): Promise<Product | null>;
  getProductById(productId: number): Promise<Product | null>;
  getAllProducts(): Promise<Product[]>;
  updateProduct(updatedProduct: Product): Promise<Product | null>;
  deleteProduct(productId: number): Promise<boolean>;
}

export { ProductRepository };