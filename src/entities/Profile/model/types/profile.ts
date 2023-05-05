import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
    first?: string;
    lastName?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    userName?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readOnly: boolean;
}
