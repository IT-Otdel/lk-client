import { IProjectData, IUserData } from "./interfaces"

export const userData : IUserData = {
    fullname : "Валерий Петров",
    avatar : "https://i.pinimg.com/736x/13/ff/a2/13ffa2e7ebec978a4b95abfa4822be79.jpg",
    username : "abobapivas",
    grade : "Стажерgbljh",
    subscribers : "141",
    subscriptions : "12",
    specialization : "frontend",
    technologies : ["Python", "Java Spring" , "React"]
}

export const projectsData : IProjectData[] = [
    {
        image : "https://cdn.culture.ru/images/8de9b40e-3061-5b4a-af3e-f8cdc197294f",
        title : "ИИ чат-бот для Telegram на aiogram",
        type : "back-end",
        status : "Начат"
    },
    
    {
        image : "https://cdn.culture.ru/images/8de9b40e-3061-5b4a-af3e-f8cdc197294f",
        title : "Дизайн-проект официального сайта Tech.dep",
        type : "design",
        status : "Начат"
    }
]