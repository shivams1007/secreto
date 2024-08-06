import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { environment } from 'src/environments/environment';

import { statements } from '../modules/shared/constant/upgrade.constant';

@Injectable()
export class InitializeAppService {
  isAppInit: boolean = false;
  private loadToVersion = statements[statements.length - 1].toVersion;
  constructor(
    private sqliteService: SQLiteService,
  ) {

  }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      try {
        this.isAppInit = true;
        this.createInitialTables();
      } catch (error) {
        console.log(`initializeAppError: ${error}`);
      }
    });
  }

  async createInitialTables() {
    await this.sqliteService.openDatabase(false, 'no-encryption', environment.DB_VERION, false);
    // await this.sqliteService.addUpgradeStatement({
    //   database: environment.DB_NAME,
    //   upgrade: statements
    // });
    const db = (await this.sqliteService.getDatabaseList()).values!;
    console.log('db: ', db);
    const isEncrypt = (await this.sqliteService.isDatabaseEncrypted('SecretoDB')).result!;
    console.log('isEncrypt: ', isEncrypt);
  }

}
