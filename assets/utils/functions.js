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
