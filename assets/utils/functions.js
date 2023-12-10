export const padLeft = (text, length = 4, padString = " ") => {
    let stringLength = text.toString().length;
    if (stringLength > length) return text;

    for (let i = stringLength; i < length; i++) {
        text = padString + text;
    }

    return text;
}

export const strGenerator = (size = 10, withUppercase = true) => {
    const letters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'w',
        'y',
        'v',
        'x',
        'z',
    ]
    var searchableLetters = []

    letters.forEach((letter) => {
        searchableLetters.push(letter)
        if (withUppercase) searchableLetters.push(letter.toUpperCase())
    })
    var str = ''
    for (let i = 0; i < size; i++) {
        const rand = Math.floor(Math.random() * (searchableLetters.length - 1));
        str += searchableLetters[rand]
    }
    return str
}

export const getTimestamp = () => {
    const currentDate = new Date()
    return currentDate.getTime()
}

export const idGenerator = () => {
    const salt = Math.floor(Math.random() * 100000);

    return strGenerator(15, true) + '-' + getTimestamp() + '-' + salt + '-' + strGenerator(7, true)
}

export const ucfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const renderData = (data, keys, defaultValue = "", loaderIfNull = false) => {
    let extractor = null;

    if (data === null) {
        if (loaderIfNull) return returnLoader();
        return defaultValue;
    }

    for (let key of keys.split(".")) {
        if (extractor === null) {
            extractor = data;
        }

        if (typeof extractor[key] === "undefined") {
            if (loaderIfNull) return returnLoader();
            return defaultValue;
        }

        extractor = extractor[key];
    }

    return extractor;
}

export const returnLoader = () => {
    return <Spinner />;
}

export const getHeight = (height) => {
    if (height < 10) {
        return centimetersText(height * 10);
    }

    let altura = height / 10;
    if (height % 10 === 0) {
        return metersText(altura);
    }

    let splitValue = altura.toFixed(2).toString().split(".");

    return `${metersText(splitValue[0])} e ${centimetersText(splitValue[1])}`;
}

const centimetersText = (centimeters) => {
    return parseInt(centimeters) !== 1 ? `${centimeters} centímetros` : `${centimeters} centímetro`;
}

const metersText = (meters) => {
    return parseInt(meters) !== 1 ? `${meters} metros` : `${meters} metro`;
}

export const getWeight = (weight) => {
    if (weight < 100) {
        return gText(weight * 10);
    }

    let peso = weight / 100;
    if (weight % 100 === 0) {
        return kgText(peso);
    }

    return kgText(peso.toFixed(1).toString().replace(".", ","));
}

const gText = (gVal) => {
    return parseInt(gVal) !== 1 ? `${gVal} gramas` : `${gVal} grama`;
}

const kgText = (kgVal) => {
    return `${kgVal} KG`;
}

export const getFlavorText = (entries) => {
    let filters = entries.filter((entry) => entry.language.name === "pt-BR");

    if (filters.length > 0) {
        return normalizeFilters(filters);
    }

    filters = entries.filter((entry) => entry.language.name === "en");
    if (filters.length > 0) {
        return normalizeFilters(filters);
    }

    return "Não possui um texto personalizado.";
}

const normalizeFilters = (filters) => {
    let phrases = filters[0].flavor_text.replaceAll("\n", " ").replaceAll("\f", " ").split(".");
    return phrases.map((phrase) => ucfirst(phrase.toLowerCase())).join(" ");
}

export const hasGender = (species) => {
    return getFemaleGenderPercentage(species) > 0;
}

export const getFemaleGenderPercentage = (species) => {
    return species.gender_rate * 100 / 8
}

export const getMaleGenderPercentage = (species) => {
    return 100 - getFemaleGenderPercentage(species);
}

export const searchSprite = (pokemon) => {
    if (pokemon.sprites.other['official-artwork'].front_default !== null) {
        return pokemon.sprites.other['official-artwork'].front_default;
    }

    return searchValueInSprites(pokemon.sprites);
}

export const searchValueInSprites = (sprites) => {
    for (let key in sprites) {
        if (sprites[key] === null) {
            continue;
        }

        if (typeof sprites[key] === "string") return sprites[key];

        if (typeof sprites[key] === Object) {
            return searchValueInSprites(sprites[key]);
        }
    }

    return null;
}
