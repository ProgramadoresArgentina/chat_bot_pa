const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const principalFlow = require("./principal/principal");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MongoAdapter = require("@bot-whatsapp/database/mongo");

/**
 * Declaramos las conexiones de Mongo
 */

const MONGO_DB_URI = "mongodb://localhost:27017";
const MONGO_DB_NAME = "db_new_bot";

const main = async () => {
  const adapterDB = new MongoAdapter({
    dbUri: MONGO_DB_URI,
    dbName: MONGO_DB_NAME,
  });
  const adapterFlow = createFlow([principalFlow]);
  const adapterProvider = createProvider(BaileysProvider);
  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
  QRPortalWeb();
};

module.exports = main;
