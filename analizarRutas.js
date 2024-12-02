var path;
function init(p){
    path= p.split("/");
    path.shift();
}
function siguiente() {
    return path.shift();
}

module.exports = {
    init, 
    siguiente
}