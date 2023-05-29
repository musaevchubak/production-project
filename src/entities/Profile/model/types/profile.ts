import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
    id?: string;
    first?: string;
    lastName?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    userName?: string;
    avatar?: string;
}
