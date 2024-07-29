module.exports = function toReadable (number) {
    let numberString = number.toString();
    let numberHumanReadable = '';

    const makeFirstNumbers = (number) => {
        switch (number){
            case '0':
                return `zero`;
            case '1':
                return `one`;
            case '2':
                return `two`;
            case '3':
                return `three`;
            case '4':
                return `four`;
            case '5':
                return `five`;
            case '6':
                return `six`;
            case '7':
                return `seven`;
            case '8':
                return `eight`;
            case '9':
                return `nine`;
        };
    }

    const makeTeenNumbers = (number) => {
        switch (number[number.length - 1]){
            case '0':
                return `ten`;
            case '1':
                return `eleven`;
            case '2':
                return `twelve`;
            case '3':
                return `thirteen`;
            case '4':
                return `fourteen`;
            case '5':
                return `fifteen`;
            case '6':
                return `sixteen`;
            case '7':
                return `seventeen`;
            case '8':
                return `eighteen`;
            case '9':
                return `nineteen`;
        }
    }

    if (numberString.length < 2){
        return makeFirstNumbers(numberString);
    }

    for(let i = 0; i < numberString.length; i++){
        if (numberString.length === 2 && i === 0){
            switch (numberString[i]){
                case '1':
                    return `${makeTeenNumbers(numberString)}`;
                case '2':
                    numberHumanReadable = `${numberHumanReadable}twenty`;
                    break;
                case '3':
                    numberHumanReadable = `${numberHumanReadable}thirty`;
                    break;
                case '4':
                    numberHumanReadable = `${numberHumanReadable}forty`;
                    break;
                case '5':
                    numberHumanReadable = `${numberHumanReadable}fifty`;
                    break;
                case '6':
                    numberHumanReadable = `${numberHumanReadable}sixty`;
                    break;
                case '7':
                    numberHumanReadable = `${numberHumanReadable}seventy`;
                    break;
                case '8':
                    numberHumanReadable = `${numberHumanReadable}eighty`;
                    break;
                case '9':
                    numberHumanReadable = `${numberHumanReadable}ninety`;
                    break;
            }
    	}

        if ((numberString.length === 2 && i === 1) || (numberString.length === 3 && i === 2)){
            return `${numberHumanReadable} ${numberString[i] !== '0' ? makeFirstNumbers(numberString[i]) : ''}`.trim();
        };

        if (numberString.length === 3 && i === 0){
            switch (numberString[i]){
                case '1':
                    numberHumanReadable = `${numberHumanReadable}one hundred`;
                    break;
                case '2':
                    numberHumanReadable = `${numberHumanReadable}two hundred`;
                    break;
                case '3':
                    numberHumanReadable = `${numberHumanReadable}three hundred`;
                    break;
                case '4':
                    numberHumanReadable = `${numberHumanReadable}four hundred`;
                    break;
                case '5':
                    numberHumanReadable = `${numberHumanReadable}five hundred`;
                    break;
                case '6':
                    numberHumanReadable = `${numberHumanReadable}six hundred`;
                    break;
                case '7':
                    numberHumanReadable = `${numberHumanReadable}seven hundred`;
                    break;
                case '8':
                    numberHumanReadable = `${numberHumanReadable}eight hundred`;
                    break;
                case '9':
                    numberHumanReadable= `${numberHumanReadable}nine hundred`;
                    break;
            }
       	}

        if (numberString.length === 3 && i === 1){
            switch (numberString[i]){
                case '1':
                    return `${numberHumanReadable} ${makeTeenNumbers(numberString)}`
                case '2':
                    numberHumanReadable = `${numberHumanReadable} twenty`;
                    break;
                case '3':
                    numberHumanReadable = `${numberHumanReadable} thirty`;
                    break;
                case '4':
                    numberHumanReadable = `${numberHumanReadable} forty`;
                    break;
                case '5':
                    numberHumanReadable = `${numberHumanReadable} fifty`;
                    break;
                case '6':
                    numberHumanReadable = `${numberHumanReadable} sixty`;
                    break;
                case '7':
                    numberHumanReadable = `${numberHumanReadable} seventy`;
                    break;
                case '8':
                    numberHumanReadable = `${numberHumanReadable} eighty`;
                    break;
                case '9':
                    numberHumanReadable = `${numberHumanReadable} ninety`;
                    break;
            }
    	}
    }
    return numberHumanReadable;
}

