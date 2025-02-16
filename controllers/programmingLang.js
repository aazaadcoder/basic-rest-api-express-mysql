const config = require("../config.js");
const helper = require("../helper.js");
const db = require("../services/db.js");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `select id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    from programming_languages limit ${offset}, ${config.listPerPage}`
  );

  const data = helper.emptyOrRow(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
    getMultiple
};
