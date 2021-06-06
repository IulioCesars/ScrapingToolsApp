import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.ScrapingToolsApp', "1.0")

export async function useTransaction<T = void>(callback: (it: SQLite.SQLTransaction) => T) : Promise<T> {
    let result : T;

    return new Promise((next, reject) => {
        db.transaction(
            t => result = callback(t),
            error => reject(new Error(error.message)),
            () => next(result)
        );
    });
}

export async function setupDatabaseAsync() : Promise<void> {
    return useTransaction(t => {
        t.executeSql(`CREATE TABLE IF NOT EXISTS ScrapingTask (
            idScrapingTask  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
            taskName        TEXT NOT NULL,
            baseURL         TEXT NOT NULL,
            template        TEXT
        );`);
    });
}