import { reactive } from 'vue';
import { Wine, WineStoreContents } from '../../../typescript/wineTypes';

const allWinesList: Wine[] = [];
const currentWine: Wine = {
  name: '',
  varietal: '',
  color: '',
}

const wineState: WineStoreContents = reactive({
  allWinesList: allWinesList,
  currentWine: currentWine,
});

export function AccessWineStore(): WineStoreContents {
  return wineState;
}
