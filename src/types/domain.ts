export interface ITask {
    name: string,
    description: string,
    time: string,
    date: string,
    categories: string[]
}

export interface IResult {
    isValid: boolean,
    error: string,
    color: 'success' | 'error'    
}