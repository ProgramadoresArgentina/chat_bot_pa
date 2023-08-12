const { addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowSecundarioProjects1 = addKeyword(['Trabajo', 'trabajo']).addAnswer([
    '📄 Aquí tenemos el flujo secundario de Trabajo',
])

const flowSecundarioProjects2 = addKeyword(['Proyecto', 'proyecto', 'proyectos', 'Proyectos']).addAnswer([
    '📄 Aquí tenemos el flujo secundario de Proyecto',
])

const flowComunidad = addKeyword(['Comunidad', 'comunidad', 'comuni', 'comu']).addAnswer(
    [
        '📄 Aquí encontras los links a nuestras redes',
        '*INSTRAGRAM* https://www.instagram.com/programadores_argentina/',
        '*LINKEDIN* https://www.linkedin.com/company/programadores-argentina',
        '*FACEBOOK* https://www.facebook.com/programadoresargentina/',
        '*INSTRAGRAM* https://www.instagram.com/programadores_argentina/',
        '\n*Admins:*',
        '*@juansemastrangelo*',
        '*@gonzalo.martinese*',
        '*@uli.pignatelli*',
        '*@lorena_marisol*',
        '\n Si desea regresar al menu principal escriba *Inicio*'
    ],
    null,
    null,
    []
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowProyectos = addKeyword(['PROYECTO','PROYECTOS', 'proyecto', 'project', 'Project','Proyectos', 'proyectos']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '*1-* Quiero trabajar en un proyecto, escriba *Trabajo*',
        '*2-* Tengo un proyecto, escriba *Proyecto*',
    ],
    null,
    null,
    [flowSecundarioProjects1, flowSecundarioProjects2]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

module.exports = {
  flowSecundario,flowSecundarioProjects1,flowSecundarioProjects2,flowComunidad,flowTuto,flowProyectos,flowDiscord
}