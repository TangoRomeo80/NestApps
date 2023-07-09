import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports() {
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Create';
  }

  @Put(':id')
  updateReport() {
    return 'Update';
  }

  @Patch(':id')
  updateReportPartial() {
    return 'Update partial';
  }

  @Delete(':id')
  deleteReport() {
    return 'Delete';
  }
}
