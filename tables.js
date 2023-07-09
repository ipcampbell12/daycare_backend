

const column = (fieldName, type, nullability, key, defaultVal, extra) => {
    const columnVals =
    {
        field: fieldName,
        type: type,
        null: nullability,
        key: key,
        default: defaultVal,
        extra: extra
    };
    return columnVals;
};


const id = column('id', 'INTEGER', 'NOT NULL', 'PRIMARY KEY', null, 'AUTO_INCREMENT')


const tables = [
    {
        tableName: 'users',
        columns: [
            id,
            { field: 'username', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
            { field: 'password', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
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
