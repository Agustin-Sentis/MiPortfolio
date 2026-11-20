export const SECTION_IDS = [
  'about',
  'experience',
  'projects',
  'skills',
  'education',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
