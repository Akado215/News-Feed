export interface INews {
    articles: IArticle[]
    totalArticles: number
}

export interface IArticle {
    title: string
    description: string
    content: string
    publishedAt: Date
}