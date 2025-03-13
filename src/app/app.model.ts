export interface category {
  id: number,
  title: string
  genre?: actorarry[],
  ratingTotal?: string,
  ratingNow?: number,
  Stars: string,
  actors?: actorarry[],
  plot?: string,
  poster: string,
  image: string,
  runtime?: string,
  boxOffice?: string,
  rating:number,
  Genre:string,
}
export interface actorarry {
  name: string
  genre: string
}