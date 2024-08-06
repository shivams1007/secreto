export const statements = [
    {
        toVersion: 1,
        statements: [
            `CREATE TABLE IF NOT EXISTS entries (
            id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
            title varchar NOT NULL,category_id integer,
            username varchar NOT NULL,
            password varchar NOT NULL,
            website varchar,remark varchar,icon varchar
          );`
        ]
    }
];
