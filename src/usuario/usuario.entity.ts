import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity({ name: "usuarios" })
export class UsuarioEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @Column({ name: "email", length: 70, nullable: false })
  email: string;

  @Column({ name: "senha", length: 255, nullable: false })
  senha: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: string

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: string

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt: string
}
