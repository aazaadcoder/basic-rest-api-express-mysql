
function getOffset(currentPage = 1 , listPerPage){
    return (currentPage-1)*listPerPage;
}

function emptyOrRow(row){
    if(!row){
        return [];
    }
    return row;
}

module.exports = {
    getOffset, 
    emptyOrRow
}