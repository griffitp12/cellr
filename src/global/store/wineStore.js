import { reactive } from 'vue';
const allWinesList = [];
const currentWine = {
    id: 0,
    name: '',
    varietal: '',
    vintage: 0,
    color: '',
};
const wineState = reactive({
    allWinesList: allWinesList,
    currentWine: currentWine,
});
export function AccessWineStore() {
    return wineState;
}
