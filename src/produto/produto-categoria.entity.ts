import { Column, Entity } from "typeorm";

@Entity()
export class CaracteristicaProduto {
  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @Column({ name: "descricao", length: 100, nullable: false })
  descricao: string;
}