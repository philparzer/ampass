import { z } from 'zod'

export const projects = [
    {
        name: 'Hydropower',
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
        link: 'https://gutai.vercel.app/'
    },
    {
        name: 'Rumschmarrn',
        asset: '/project-assets/rumschmarrn.webp',
        link: 'https://www.rumschmarrn.com/'
    },
    {
        name: 'BADFILE.ZIP',
        asset: '/project-assets/badfile.webp',
        link: 'https://badfile.zip'
    },
    {
        name: 'bbox2seg',
        asset: '/project-assets/bbox2seg.png',
        link: 'https://github.com/johannes-p/bbox2samgmentation'
    }
]

export const ProjectSchema = z.object({
    name: z.string(),
    asset: z.string(),
    link: z.string().url()
})

export type Project = z.infer<typeof ProjectSchema>