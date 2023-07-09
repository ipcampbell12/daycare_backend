

const createColumn = (fieldName, type, nullability = 'NOT NULL', key = null, defaultVal = null, extra = null) => {
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

const id = createColumn('id', 'INTEGER', 'NOT NULL', 'PRIMARY KEY', null, 'AUTO_INCREMENT');


const tables = [
    {
        tableName: 'users',
        columns: [
            id,
            createColumn('uswername', 'VARCHAR(255)'),
            createColumn('password', 'VARCHAR(255)')
        ]
    },
    {
        tableName: 'children',
        columns: [
            id,
            createColumn('first_name', 'VARCHAR(255)'),
            createColumn('last_name', 'VARCHAR(255)'),
            createColumn('date_of_birth', 'DATE'),
        ]
    },
    {
        tableName: 'parents',
        columns: [
            id,
            createColumn('first_name', 'VARCHAR(255)'),
            createColumn('last_name', 'VARCHAR(255)'),
            createColumn('email', 'VARCHAR(255)'),
            createColumn('phone_number', 'CHAR(12)'),
            createColumn('spouse_id', 'INTEGER', 'FOREIGN KEY'),
            createColumn('child_id', 'INTEGER', 'FOREIGN KEY'),
        ]

    },
    {
        tableName: 'children_parents',
        columns: [
            id,
            createColumn('first_name', 'VARCHAR(255)'),
            createColumn('child_id', 'INTEGER', 'FOREIGN KEY'),
            createColumn('parents_id', 'INTEGER', 'FOREIGN KEY'),
        ]

    },

]
