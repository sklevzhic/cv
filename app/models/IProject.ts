import ImageEnglish from "../assets/projects/english.jpg";

// export interface Image {
//     blurDataURL: string,
//     height: number,
//     src:  string,
//     width: number
// }

export interface IProject {
    name: string,
    image: any,
    description: string,
    id: string | number,
    technologies: string,
    linkDemo: string,
    linkCode: string
}
