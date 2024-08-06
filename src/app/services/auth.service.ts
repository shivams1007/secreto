import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { SQLiteService } from "./sqlite.service";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public sqliteService = inject(SQLiteService);
    private db!: SQLiteDBConnection;
    isAuthenticated: WritableSignal<boolean> = signal<boolean>(false);
    isPwdCreated: WritableSignal<boolean> = signal<boolean>(localStorage.getItem('masterPassword') ? true : false);
    constructor() {


    }

    authenticated(password: string) {
        return new Promise(async (resolve, reject) => {
            try {
                // const db = (await this.sqliteService.getDatabaseList()).values!;
                // console.log('db: ', db);
                // const isEncrypt = (await this.sqliteService.isDatabaseEncrypted('SecretoDB')).result!;
                // console.log('isEncrypt: ', isEncrypt);
                // await this.sqliteService.closeConnection("SecretoDB", false);
                // const checkPhrase = await this.sqliteService.checkEncryptionSecret(password);
                // if (!checkPhrase.result) await this.sqliteService.setEncryptionSecret(password);
                this.db = await this.sqliteService.openDatabase(true, 'encryption', 1, false);
                this.isAuthenticated.set(true);
                resolve(true);
            } catch (error) {
                console.log('error: ', error);
                reject(error);
            }
        });
    }






}