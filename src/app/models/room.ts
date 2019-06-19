export interface IRoom {
    title: string;
    imageUrl:string;
    imageAlt:string;
    description?:string;
    nbMin: number;
    nbMax: number;
    difficulty: number;
    isVirtual: boolean;
}
