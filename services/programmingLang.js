const config = require("../config.js");
const helper = require("../helper.js");
const db = require("./db.js");

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

async function createOne(programming_language) {
  const result = await db.query(
    `insert into programming_languages
    (name, released_year, githut_rank, pypl_rank, tiobe_rank)
    values
    ('${programming_language.name}', ${programming_language.released_year}, 
    ${programming_language.githut_rank}, ${programming_language.pypl_rank}, ${programming_language.tiobe_rank} )`
  );

  let message = "Error in creating programming language.";

  if (result.affectedRows) {
    message = "Prgramming language created successfully";
  }

  return { message, result };
}

async function updateOne(id, programming_language) {
  try {
    const result = db.query(
      `update programming_languages
      set name='${programming_language.name}', released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank}, 
      pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank}
      where id=${id}`
    );

    let message = "Error in updating the programming language."

    if(result.affectedRows){
      message = "Successfully updated the programming language."
    }

    return {message, result }
  } catch (error) {}
}
module.exports = {
  getMultiple,
  createOne,
};
