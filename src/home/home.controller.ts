import { Controller, Get, Redirect, Response } from '@nestjs/common';


@Controller('/')
export class HomeController {


  @Get()
  @Redirect('api',301)
  apiRedirect() { }
   

}
