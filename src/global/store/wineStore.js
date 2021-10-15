import { reactive } from 'vue';
const allWinesList = [];
const currentWine = {
    name: '',
    varietal: '',
    color: '',
};
const wineState = reactive({
    allWinesList: allWinesList,
    currentWine: currentWine,
});
export function AccessWineStore() {
    return wineState;
}
