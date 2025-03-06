function typeWrite(element, start, speed=75) {
        const textArray = element.innerHTML.split('');
        element.innerHTML = '';
        textArray.forEach((letter, i) => {
            setTimeout(() => {
                element.innerHTML += letter;
            }, speed * i + start);
        });
        return textArray.length * 75;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const types = document.getElementsByClassName('type');
        var start = 0;
        for (const type of types) {
            var classes = type.classList;
            console.log(classes);
            start += typeWrite(type, start, classes[1]) + 200;
        }
    });