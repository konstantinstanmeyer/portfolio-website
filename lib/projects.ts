export interface Project {
  id: string
  title: string
  subtitle: string
  type: 'Client' | 'Personal' | 'Application'
  year: string
  description: string
  challenge?: string
  solution?: string
  technologies: string[]
  timeline?: string
  role?: string
  liveUrl?: string
  githubUrl?: string
  image: string
  images?: string[]
}

export const projects: Project[] = [

]

export const featuredProjects = projects.slice(0, 3)