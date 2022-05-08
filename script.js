let [bodyKeyboard, words, btnLetterList, langCurrent] = [
    document.querySelector('.body'),
    [
        ['ё', 'Ё', '`', '~', 'ё', 'Ё', '`', '~'],
        ['1', '!', '1', '!', '1', '!', '1', '!'],
        ['2', '"', '2', '@', '2', '"', '2', '@'],
        ['3', '№', '3', '#', '3', '№', '3', '#'],
        ['4', ';', '4', '$', '4', ';', '4', '$'],
        ['5', '%', '5', '%', '5', '%', '5', '%'],
        ['6', ':', '6', '^', '6', ':', '6', '^'],
        ['7', '?', '7', '&', '7', '?', '7', '&'],
        ['8', '*', '8', '*', '8', '*', '8', '*'],
        ['9', '(', '9', '(', '9', '(', '9', '('],
        ['0', ')', '0', ')', '0', ')', '0', ')'],
        ['-', '_', '-', '_', '-', '_', '-', '_'],
        ['=', '+', '=', '+', '=', '+', '=', '+'],
        ['\\', '/', '\\', '|', '\\', '/', '\\', '|'],
        [
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace',
        ],
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['й', 'Й', 'q', 'Q', 'Й', 'й', 'Q', 'q'],
        ['ц', 'Ц', 'w', 'W', 'Ц', 'ц', 'W', 'w'],
        ['у', 'У', 'e', 'E', 'У', 'у', 'E', 'e'],
        ['к', 'К', 'r', 'R', 'К', 'к', 'R', 'r'],
        ['е', 'Е', 't', 'T', 'Е', 'е', 'T', 't'],
        ['н', 'Н', 'y', 'Y', 'Н', 'н', 'Y', 'y'],
        ['г', 'Г', 'u', 'U', 'Г', 'г', 'U', 'u'],
        ['ш', 'Ш', 'i', 'I', 'Ш', 'ш', 'I', 'i'],
        ['щ', 'Щ', 'o', 'O', 'Щ', 'щ', 'O', 'o'],
        ['з', 'З', 'p', 'P', 'З', 'з', 'P', 'p'],
        ['х', 'Х', '[', '{', 'Х', 'х', '[', '{'],
        ['ъ', 'Ъ', ']', '}', 'Ъ', 'ъ', ']', '}'],
        ['DEL', 'DEL', 'DEL', 'DEL', 'DEL', 'DEL', 'DEL', 'DEL'],
        [
            'Caps Lock',
            'Caps Lock',
            'Caps Lock',
            'Caps Lock',
            'Caps Lock',
            'Caps Lock',
            'Caps Lock',
            'Caps Lock',
        ],
        ['ф', 'Ф', 'a', 'A', 'Ф', 'ф', 'A', 'a'],
        ['ы', 'Ы', 's', 'S', 'Ы', 'ы', 'S', 's'],
        ['в', 'В', 'd', 'D', 'В', 'в', 'D', 'd'],
        ['а', 'А', 'f', 'F', 'А', 'а', 'F', 'f'],
        ['п', 'П', 'g', 'G', 'П', 'п', 'G', 'g'],
        ['р', 'Р', 'h', 'H', 'Р', 'р', 'H', 'h'],
        ['о', 'О', 'j', 'J', 'О', 'о', 'J', 'j'],
        ['л', 'Л', 'k', 'K', 'Л', 'л', 'K', 'k'],
        ['д', 'Д', 'l', 'L', 'Д', 'д', 'L', 'l'],
        ['ж', 'Ж', ';', ':', 'Ж', 'ж', ';', ':'],
        ['э', 'Э', "'", '"', 'Э', 'э', "'", '"'],
        [
            'Enter',
            'Enter',
            'Enter',
            'Enter',
            'Enter',
            'Enter',
            'Enter',
            'Enter',
        ],
        [
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
        ],
        ['я', 'Я', 'z', 'Z', 'Я', 'я', 'Z', 'z'],
        ['ч', 'Ч', 'x', 'X', 'Ч', 'ч', 'X', 'x'],
        ['с', 'С', 'c', 'C', 'С', 'с', 'C', 'c'],
        ['м', 'М', 'v', 'V', 'М', 'м', 'V', 'v'],
        ['и', 'И', 'b', 'B', 'И', 'и', 'B', 'b'],
        ['т', 'Т', 'n', 'N', 'Т', 'т', 'N', 'n'],
        ['ь', 'Ь', 'm', 'M', 'Ь', 'ь', 'M', 'm'],
        ['б', 'Б', ',', '<', 'Б', 'б', ',', '<'],
        ['ю', 'Ю', '.', '>', 'Ю', 'ю', '.', '>'],
        ['.', ',', '/', '?', '.', ',', '/', '?'],
        ['↑', '↑', '↑', '↑', '↑', '↑', '↑', '↑'],
        [
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
            'Shift',
        ],
        ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        [
            'ru/en',
            'ru/en',
            'ru/en',
            'ru/en',
            'ru/en',
            'ru/en',
            'ru/en',
            'ru/en',
        ],
        ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['←', '←', '←', '←', '←', '←', '←', '←'],
        ['↓', '↓', '↓', '↓', '↓', '↓', '↓', '↓'],
        ['→', '→', '→', '→', '→', '→', '→', '→'],
        ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
    '0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,38,39,40,43,44,45,46,47,48,49,50,51,52,53,58,60,61,62',
    localStorage.getItem('lang') || 'rus',
]

function createElement(type, parentEl, assign, flag, ...classes) {
    let el = document.createElement(`${type}`)
    for (let e of classes) {
        el.classList.add(`${e}`)
    }
    parentEl.append(el)
    flag
        ? (window[assign] = document.querySelector(`.${classes[0]}`))
        : (window[assign] = document.querySelectorAll(`.${classes[0]}`))
}

createElement('main', bodyKeyboard, 'mainKeyboard', true, 'main')
createElement('textarea', mainKeyboard, 'textareaKeyboard', true, 'textarea')
textareaKeyboard.placeholder = 'Введите текст: '
createElement('div', mainKeyboard, 'keyboardWrapper', true, 'keyboard-wrapper')
createElement('div', mainKeyboard, 'information', true, 'information')
for (let i = 0; i < 3; i++) {
    createElement('div', information, 'info', false, 'info')
}
info[0].textContent = 'СКРЫТЬ'
info[1].textContent = 'ЗВУК ON'
info[2].textContent = 'ИНФО'
createElement('div', keyboardWrapper, 'keyboardBtn', true, 'keyboard-btn')
for (let i = 0; i < 5; i++) {
    createElement('div', keyboardBtn, 'keyboardGroup', false, 'keyboard-group')
}
for (let i = 0; i < keyboardGroup.length; i++) {
    let temp = [15, 14, 13, 13, 9]
    for (let j = 0; j < temp[i]; j++) {
        createElement('button', keyboardGroup[i], 'btn', false, 'btn')
    }
}
for (let i = 0; i < btn.length; i++) {
    if (i === 14 || i === 15 || i === 28 || i === 29 || i === 55 || i === 63) {
        btn[i].classList.add('btn-wide1')
    } else if (i === 41 || i === 42 || i === 54) {
        btn[i].classList.add('btn-wide2')
    } else if (i === 58) {
        btn[i].classList.add('btn-wide3')
    }
}

function changeLang(lang) {
    for (let i = 0; i < btn.length; i++) {
        if (lang === 'eng') {
            btn[i].textContent = words[i][2]
        } else {
            btn[i].textContent = words[i][0]
        }
    }
}

changeLang(langCurrent)

function changeLocalStorage() {
    if (langCurrent === 'rus') {
        localStorage.setItem('lang', 'eng')
        langCurrent = 'eng'
    } else {
        localStorage.setItem('lang', 'rus')
        langCurrent = 'rus'
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mousedown', function (e) {
        e.target.classList.add('btn-pressed')
        if (btnLetterList.split(',').includes(i.toString())) {
            textareaKeyboard.focus()
            textareaKeyboard.value += e.target.textContent
        } else if (i === 56) {
            changeLocalStorage()
            changeLang(langCurrent)
        }
    })
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseup', function (e) {
        e.target.classList.remove('btn-pressed')
    })
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseleave', function (e) {
        e.target.classList.remove('btn-pressed')
    })
}
