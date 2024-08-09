import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './services/produto.service';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriaService } from '../categoria/services/categoria.service';
import { ProdutoController } from './controllers/produto.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}