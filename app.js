const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level="debug"; //production

logger.info("La app se inicia perron");
logger.warn("AGUAS CON EL GATO");
logger.error("CUIDADO CON EL PERRO");
logger.fatal("Te moristes >:C");

function sumar(x, y){
    return x + y;
}

module.exports = sumar;