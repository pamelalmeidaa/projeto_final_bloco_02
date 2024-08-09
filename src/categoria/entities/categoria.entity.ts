import { Transform, TransformFnParams } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";


@Entity({ name: "tb_categorias" })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => {
    return value?.trim();
  })
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  categoria: string;
    Produto: any;

}