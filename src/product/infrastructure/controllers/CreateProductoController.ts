import { Request, Response } from "express";
import { CreateProductoUseCase } from "../../application/CreateProductoUseCase";

export class CreateProductController {
  constructor(readonly createProductoUseCase: CreateProductoUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const product = await this.createProductoUseCase.run(
        data.nombre,
        data.cantidad,
        data.precioCosto,
        data.precioVenta
      );

      if (product)
        // Code HTTP: 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: product?.id,
            name: product?.name,
            description: product?.description,
            price: product?.price,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      // Code HTTP: 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}