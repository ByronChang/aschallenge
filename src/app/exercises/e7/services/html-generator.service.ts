import { Injectable } from '@nestjs/common';

@Injectable()
export class HtmlGeneratorService {
  public generateRepairBayHtml(systemCode: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Repair</title>
      </head>
      <body>
          <div class="anchor-point">${systemCode}</div>
      </body>
      </html>
    `;
  }
}
