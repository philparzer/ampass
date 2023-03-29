import { z } from 'zod'

export const projects = [
    {
        name: 'hydropower by miller',
        asset: '/project-assets/hydropower-by-miller.jpg',
        link: '/projects/hydropower'
    },
    {
        name: 'Tirol 1809',
        asset: '/project-assets/hofer.jpg',
        link: '/projects/tirol1809',
    },
    {
        name: 'Gutai',
        asset: '/project-assets/gutai.png',
        link: 'https://gutai.app/'
    },
    {
        name: 'Kunsthaus Graz',
        asset: '/project-assets/kunsthaus-graz.jpg',
        link: 'https://www.kunsthausgraz.at/'
    },
]

export const ProjectSchema = z.object({
    name: z.string(),
    asset: z.string(),
    link: z.string().url()
})

export type Project = z.infer<typeof ProjectSchema>