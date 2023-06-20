type FormatValueType = (value: number) => string;
type CountryCodesType = "USD";

interface UseCurrencyFormatterReturns {
  formatValue: FormatValueType;
}

interface ICountries {
  USD: string;
}

const countries:ICountries ={
  USD: 'en-US',
}

export default function useCurrencyFormatter(cName:CountryCodesType = 'USD'):UseCurrencyFormatterReturns {
  function formatValue(value: number) {
    const finalValue = new Intl.NumberFormat(countries[cName as keyof ICountries], {
      style: 'currency',
      currency: cName,
    }).format(value)

    return finalValue;
  }

  return { formatValue }
}
