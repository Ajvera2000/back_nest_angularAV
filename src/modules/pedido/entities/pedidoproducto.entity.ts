// Archivos abiertos en las pestañas superiores:
// TS pedidoProducto.entity.ts U
// TS pedido.entity.ts U
// TS producto.entity.ts U

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity('pedido_producto')
export class PedidoProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedidoId: number;

    @Column()
    productoId: number;

    @Column()
    cantidad: number;

    @ManyToOne(() => Pedido, (ped) => ped.pedidoProducto)
    pedido: Pedido;

    @ManyToOne(() => Producto, (pro) => pro.pedidoProducto)
    producto: Producto;
}