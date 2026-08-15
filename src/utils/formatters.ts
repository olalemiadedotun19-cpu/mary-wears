import { Currency } from '../types';
import { CURRENCY_RATES } from '../data/products';

export function formatPrice(amountUSD: number, currency: Currency): string {
  const info = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = amountUSD * info.rate;
  
  if (currency === 'JPY') {
    return `${info.symbol}${Math.round(converted).toLocaleString('en-US')}`;
  }
  
  return `${info.symbol}${Math.round(converted).toLocaleString('en-US')}`;
}
