const cors_anywhere = '';//'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/';
const latest_currencies = 'listings/latest'; 
const chart_currencies_get = 'listings/latest?start=1&limit=10&convert=';
const currency_search = 'quotes/latest?slug=';
const currency_info_get = 'info?slug=';
const currency_monthly_data = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=';
const currency_monthly_data_market = '&market=CNY'; 
const api_key = '&CMC_PRO_API_KEY=88050540-9376-4bfa-856a-c9b94ed7598e';
const api_key_data_chart = '&apikey=FYOC0P56GLPUSFMQ';

export const getLastCurrencies = `${base_url}${latest_currencies}?${api_key}`;
export const getCurrencyInfo = ( currencySlug ) => `${base_url}${currency_info_get}${currencySlug}${api_key}`;
export const getCurrencyFlow = ( currencySymbol ) => `${currency_monthly_data}${currencySymbol}${currency_monthly_data_market}${api_key_data_chart}`
export const meses = {
    '01':   'Enero',
    '02':   'Febrero',
    '03':   'Marzo',
    '04':   'Abril',
    '05':   'Mayo',
    '06':   'Junio',
    '07':   'Julio',
    '08':   'Agosto',
    '09':   'Septiembre',
    '10':   'Octubre',
    '11':   'Noviembre',
    '12':   'Diciembre',    
}

