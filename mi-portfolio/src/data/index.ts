import type { Content, Locale } from '../types/content'
import es from './es'
import en from './en'

const dictionaries: Record<Locale, Content> = { es, en }

export const getContent = (locale: Locale): Content => dictionaries[locale]
