

const createColumn = (fieldName, type, key = null, nullability = 'NOT NULL', defaultVal = null, extra = null,) => {
    let columnVals = {
        field: fieldName,
        type: type,
        null: nullability,
        key: key,
        default: defaultVal,
        extra: extra
    };

    return columnVals
};

const id = createColumn('id', 'INTEGER', 'PRIMARY KEY', 'NOT NULL', 'AUTO_INCREMENT');


const tables = [
    {
        tableName: 'children',
        columns: [
            id,
            createColumn('first_name', 'VARCHAR(255)'),
            createColumn('last_name', 'VARCHAR(255)'),
            createColumn('date_of_birth', 'DATE'),
        ],
        foreigners: [

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
            createColumn('spouse_id', 'INTEGER'),
            createColumn('child_id', 'INTEGER'),
        ],
        foreigners: [
            ['child_id', 'children', 'id']
        ]

    },
    {
        tableName: 'children_parents',
        columns: [
            id,
            createColumn('child_id', 'INTEGER'),
            createColumn('parent_id', 'INTEGER'),
        ],
        foreigners: [
            ['child_id', 'children', 'id'],
            ['parent_id', 'parents', 'id']
        ]

    },
    {
        tableName: 'visits',
        columns: [
            id,
            createColumn('visit_date', 'TIMESTAMP'),
            createColumn('visit_cost', 'DECIMAL'),
            createColumn('paid_for', 'BOOLEAN'),
        ],
        foreigners: [

        ]

    },
    {
        tableName: 'children_visits',
        columns: [
            id,
            createColumn('visit_id', 'INTEGER'),
            createColumn('child_id', 'INTEGER'),
        ],
        foreigners: [
            ['child_id', 'children', 'id'],
            ['visit_id', 'visits', 'id']
        ]

    },
    {
        tableName: 'payments',
        columns: [
            id,
            createColumn('payment_amount', 'DECIMAL'),
            createColumn('payee_id', 'INTEGER'),
            createColumn('visit_id', 'INTEGER'),
        ],
        foreigners: [
            ['payee_id', 'parents', 'id'],
            ['visit_id', 'visits', 'id']
        ]

    },

];


module.exports = {
    createColumn: createColumn,
    tables: tables
}