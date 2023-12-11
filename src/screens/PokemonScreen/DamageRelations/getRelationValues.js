import { typeTranslations } from '@/assets/utils/translations'

export const getDamageRelationValues = (types) => {
    let typeValues = {};
    for (let key in typeTranslations) {
        typeValues[key] = 1;
    }
    types.forEach((type) => {
        typeValues = addToArray(typeValues, type, "to")
    });

    let data = [];
    for (let key in typeValues) {
        data.push({
            name: key,
            value: typeValues[key]
        });
    }
    return data.sort((a, b) => {
        if (a.value <= b.value) {
            return 1;
        } else if (a.value > b.value) {
            return -1;
        }
        return 0;
    });
}

export const getDefenseRelationValues = (types) => {
    let typeValues = {};
    for (let key in typeTranslations) {
        typeValues[key] = 1;
    }

    types.forEach((type) => {
        typeValues = addToArray(typeValues, type, "from")
    });

    let data = [];
    for (let key in typeValues) {
        data.push({
            name: key,
            value: typeValues[key]
        });
    }
    return data.sort((a, b) => {
        if (a.value <= b.value) {
            return -1;
        } else if (a.value > b.value) {
            return 1;
        }
        return 0;
    });
}

const addToArray = (array, type, relation) => {
    type.damage_relations[`double_damage_${relation}`].forEach((double) => {
        array[double.name] = array[double.name] * 2;
    });
    type.damage_relations[`half_damage_${relation}`].forEach((double) => {
        array[double.name] = array[double.name] * 0.5;
    });
    type.damage_relations[`no_damage_${relation}`].forEach((double) => {
        array[double.name] = array[double.name] === 1 ? 0 : array[double.name];
    });
    return array;
}