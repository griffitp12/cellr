export interface Wine {
    name: string
    varietal: string
    color: string
}
export interface WineEncounter {
    id: number
    name: string
    bottle_price?: number
    purchase_location: string
    rating?: number
    notes: string
    encounter_date: Date
}

export interface WineStoreContents {
    allWinesList: Wine[],
    currentWine: Wine
  }
  