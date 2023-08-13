const { addKeyword, addAnswer } = require("@bot-whatsapp/bot");
const {
  flowComunidad,
  flowDiscord,
  flowProyectos,
  flowTuto,
} = require("../secondary/secondary");
const KEYS_FLOWS = require("../constants/keysFlow");

const flowPrincipal = addKeyword(KEYS_FLOWS.principal)
  .addAnswer(
    "🙌 Hola bienvenido a la comunidad de *Programadores Argentina*",
    {
      capture: true,
    },
    async (ctx, { fallBack }) => {
      if (!ctx.body.includes("@")) {
        return fallBack();
      }
    }
  )
  .addAnswer(
    [
      "te comparto los siguientes links de interes sobre la comunidad",
      "👉 *Comunidad* para ver los links de la comunidad",
      "👉 *Proyectos* si tienes un propuesta para la comunidad",
      "👉 *Trabajo* sobre trabajo",
      "👉 *Otros* sobre otro temas",
    ],
    null,
    null,
    [flowComunidad, flowProyectos, flowTuto, flowDiscord]
  );

module.exports = flowPrincipal;
