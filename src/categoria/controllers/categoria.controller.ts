import { Categoria } from '../entities/categoria.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from '../services/categoria.service';



@Controller('/categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    FindById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
        
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('Tiutlo') titulo: string ): Promise<Categoria[]> {
        return this.categoriaService.findByTipo(titulo);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise <Categoria> {
        return this.categoriaService.update(categoria);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id);
    }
}