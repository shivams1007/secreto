import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';

@Injectable()
export class InitializeAppService {
  isAppInit: boolean = false;

  constructor(
    private sqliteService: SQLiteService,
  ) {

  }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      try {
        if (this.sqliteService.platform === 'web') {
          await this.sqliteService.initWebStore();
        }
        this.isAppInit = true;

      } catch (error) {
        console.log(`initializeAppError: ${error}`);
      }
    });
  }

}
