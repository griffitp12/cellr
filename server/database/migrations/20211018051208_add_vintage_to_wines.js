
export async function up(knex) {
    const addWineName = () => {
        return knex.schema.table('wines', (t) => {
            t.integer('vintage').notNull()
        })
    }
    await addWineName()
  }
  
  export async function down(knex) {
    const dropWineName = () => {
        return knex.schema.table('wines', (t) => {
          t.dropColumn('vintage')
        })
    }
    await dropWineName()
  }

