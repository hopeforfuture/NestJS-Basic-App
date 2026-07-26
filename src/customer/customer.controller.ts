import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api/v1/customers')
export class CustomerController {
  constructor(private readonly custService: CustomerService) {}

  @Get()
  getCustomers() {
    return this.custService.getAllCustomers();
  }

  @Post()
  addCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.custService.addCustomer(createCustomerDto);
  }
}
