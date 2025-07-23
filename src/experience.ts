import { type Skill } from "./types";

export interface WorkExperience {
   company: string;
   description: string;
   stack: Skill[];
}

export const workExperiences: WorkExperience[] = [
   {
      company: 'Nummi',
      description: 'Full stack engineering',
      stack: ['TypeScript', 'Next.js', 'PostgreSQL']
   },
   {
      company: 'Illumina',
      description: 'Data scripting',
      stack: ['Python']
   }
]
