import { Injectable } from '@nestjs/common';
import { createReadStream, readdir } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  async getRootFiles(): Promise<any> {
    const directoryPath = join(__dirname, '../../../../../../../');

    return new Promise((resolve, reject) => {
      readdir(directoryPath, (err, files) => {
        if (err) reject(err);
        resolve(files);
      });
    });
  }
}
