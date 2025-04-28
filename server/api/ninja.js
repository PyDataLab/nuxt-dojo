import { getQuery, readBody } from 'h3'

export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event)  // Параметры из строки запроса
    // const { age } = await readBody(event)  // Данные из тела запроса (POST)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_wtP4Mz3DeKRClJFe5opOkxRAPPPNG9kl7BUtUuil')

    return data
})
