import { UppercasePipe } from './../common/pipes/uppercase/uppercase.pipe';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/v1/sample')
export class SampleController {
  @Post('pipe')
  transformName(@Body('name', new UppercasePipe()) name: string): Object {
    return {
      message: `Received from : ${name}`,
    };
  }
}
