import { z } from 'zod'

export const projects = [
    {
        name: 'hydropower by miller',
        asset: '/project-assets/hydropower-by-miller.jpg',
        link: '/projects/hydropower-by-miller'
    },
    {
        name: 'Tirol 1809',
        asset: '/project-assets/hofer.jpg',
        link: 'https://www.ampass.at/'
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

export const alternateProjects = [
    {
        name: 'gesichtskirmes',
        asset: '/drgnopsks/1.jpg',
        link: 'https://drachenchronik.com/'
    },
    {
        name: 'gesichtskirmes',
        asset: '/drgnopsks/2.jpg',
        link: 'https://drachenchronik.com/'
    },
    {
        name: 'gesichtskirmes',
        asset: '/drgnopsks/3.jpg',
        link: 'https://drachenchronik.com/'
    },
    {
        name: 'gesichtskirmes',
        asset: '/drgnopsks/4.png',
        link: 'https://drachenchronik.com/'
    },
]

export const ProjectSchema = z.object({
    name: z.string(),
    asset: z.string(),
    link: z.string().url()
})

export type Project = z.infer<typeof ProjectSchema>