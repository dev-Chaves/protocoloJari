const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = db;

export async function criarTabela() {
    const existe = await db.schema.hasTable('arquivos');

    if(!existe){
        await db.schema.createTable('arquivos', (table) => {
            table.increments('id');
            table.string('nome').notNullable;
            table.string('caminhi').notNullable;
            table.timestamp('data_envio').defaultTo(db.fn.now());
        });

        console.log('Tabela "arquivos" criada!')

    } else{
        console.log('Tabela "arquivos" já existe.');
    };
};

criarTabela();