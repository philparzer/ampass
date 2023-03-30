import { z } from 'zod'

export const projects = [
    {
        name: 'hydropower by miller',
        asset: '/project-assets/hydropower.webp',
        link: '/projects/hydropower'
    },
    {
        name: 'Tirol 1809',
        asset: '/project-assets/hofer.webp',
        link: '/projects/tirol1809',
    },
    {
        name: 'Gutai',
        asset: '/project-assets/gutai.webp',
        link: 'https://gutai.app/'
    },
    {
        name: 'Rumschmarrn',
        asset: '/project-assets/rumschmarrn.webp',
        link: 'https://www.kunsthausgraz.at/'
    },
]

export const ProjectSchema = z.object({
    name: z.string(),
    asset: z.string(),
    link: z.string().url()
})

export type Project = z.infer<typeof ProjectSchema>