import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { data, ReportType } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => {
      return report.type === reportType;
    });
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
