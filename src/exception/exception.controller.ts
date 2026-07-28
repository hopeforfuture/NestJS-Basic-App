import { HttpExceptionFilter } from './../filters/http-exception/filters/http-exception.filter';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
  @Get('hello/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return {
      Message: `Your ID Is: ${id}`,
    };
  }
}
