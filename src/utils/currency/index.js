import Intl from 'intl'
import 'intl/locale-data/jsonp/id-ID'

export const currency = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
