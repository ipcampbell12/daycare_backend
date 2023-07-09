

const id = {
    field: 'id', type: 'INTEGER', null: 'NOT NULL', key: 'PRIMARY KEY', default: null, extra: 'AUTO_INCREMENT'
}

const tables = [
    {
        tableName: 'users',
        columns: [
            id,
            { field: 'first_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
            { field: 'last_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
            { field: 'birth_date', type: 'DATE', null: 'NOT NULL', key: null, default: null, extra: null },
        ]
    },
    {
        tableName: 'children',
        columns: [
            id,
            { field: 'first_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
            { field: 'last_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
            { field: 'birth_date', type: 'DATE', null: 'NOT NULL', key: null, default: null, extra: null },
        ]
    },
    {

    }

]
