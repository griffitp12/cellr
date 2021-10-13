import { reactive } from 'vue';
const allWinesList = [];
const wineState = reactive({
    allWinesList: allWinesList
});
export function AccessWineStore() {
    return wineState;
}
