import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translations/auth/en.json'
import ru from './translations/auth/ru.json'
import enFormat from './formats/enFormats.json'
import dayjs from "dayjs";

export const resources = {
    en: {
        translation: en, enFormat
    },
    ru:{
        translation: ru,
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        format: function (value: any, format: string, lng: string) {
            if (value instanceof Date) {
                return formatDate(value, format)
            }
            switch (format) {
                case 'currency':
                    return formatCurrency(value, lng)
            }
            return value;
        },
    }
})

function formatDate(date: Date, format?: string) {
    return dayjs(date).format(format)
}
function formatCurrency(value: number, lng?: string) {
    return Intl.NumberFormat(lng, {
        style: 'currency',
        currency: 'EUR',
    }).format(value)
}