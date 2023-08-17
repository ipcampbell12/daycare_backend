

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
        tableName: 'providers',
        columns: [
            id,
            createColumn('first_name', 'VARCHAR(255)'),
            createColumn('last_name', 'VARCHAR(255)'),
            createColumn('username', 'VARCHAR(255)'),
            createColumn('password', 'VARCHAR(255)')
        ],
        foreigners: [

        ]
    },
    {
        tableName: 'children',
        columns: [
            id,
            createColumn('first_name', 'VARCHAR(255)'),
            createColumn('last_name', 'VARCHAR(255)'),
            createColumn('date_of_birth', 'DATE'),
            createColumn('provider_id', 'INTEGER'),
        ],
        foreigners: [
            ['provider_id', 'providers', 'id']
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
            createColumn('provider_id', 'INTEGER')
        ],
        foreigners: [
            ['provider_id', 'providers', 'id']
        ]

    },
    {
        tableName: 'children_parents',
        columns: [
            id,
            createColumn('child_id', 'INTEGER'),
            createColumn('parent_id', 'INTEGER')
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
            createColumn('provider_id', 'INTEGER')

        ],
        foreigners: [
            ['provider_id', 'providers', 'id']
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
            createColumn('provider_id', 'INTEGER')
        ],
        foreigners: [
            ['payee_id', 'parents', 'id'],
            ['visit_id', 'visits', 'id'],
            ['provider_id', 'providers', 'id']
        ]

    },

];


module.exports = {
    createColumn: createColumn,
    tables: tables
}