import { reactive } from 'vue';
import { Wine, WineStoreContents } from '../../../typescript/wineTypes';

const allWinesList: Wine[] = [];

const wineState: WineStoreContents = reactive({
  allWinesList: allWinesList
});

export function AccessWineStore(): WineStoreContents {
  return wineState;
}
