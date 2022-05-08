let [
    bodyKeyboard,
    words,
    btnLetterList,
    langCurrent,
    audio,
    audioStatus,
    keyboardStatus,
] = [
    document.querySelector('.body'),
    [
        ['Backquote', 'ё', 'Ё', '`', '~', 'ё', 'Ё', '`', '~'],
        ['Digit1', '1', '!', '1', '!', '1', '!', '1', '!'],
        ['Digit2', '2', '"', '2', '@', '2', '"', '2', '@'],
        ['Digit3', '3', '№', '3', '#', '3', '№', '3', '#'],
        ['Digit4', '4', ';', '4', '$', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%', '5', '%', '5', '%'],
        ['Digit6', '6', ':', '6', '^', '6', ':', '6', '^'],
        ['Digit7', '7', '?', '7', '&', '7', '?', '7', '&'],
        ['Digit8', '8', '*', '8', '*', '8', '*', '8', '*'],
        ['Digit9', '9', '(', '9', '(', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')', '0', ')', '0', ')'],
        ['Minus', '-', '_', '-', '_', '-', '_', '-', '_'],
        ['Equal', '=', '+', '=', '+', '=', '+', '=', '+'],
        ['Backslash', '\\', '/', '\\', '|', '\\', '/', '\\', '|'],
        ['Backspace', 'Backspace'],
        ['Tab', 'Tab'],
        ['KeyQ', 'й', 'Й', 'q', 'Q', 'Й', 'й', 'Q', 'q'],
        ['KeyW', 'ц', 'Ц', 'w', 'W', 'Ц', 'ц', 'W', 'w'],
        ['KeyE', 'у', 'У', 'e', 'E', 'У', 'у', 'E', 'e'],
        ['KeyR', 'к', 'К', 'r', 'R', 'К', 'к', 'R', 'r'],
        ['KeyT', 'е', 'Е', 't', 'T', 'Е', 'е', 'T', 't'],
        ['KeyY', 'н', 'Н', 'y', 'Y', 'Н', 'н', 'Y', 'y'],
        ['KeyU', 'г', 'Г', 'u', 'U', 'Г', 'г', 'U', 'u'],
        ['KeyI', 'ш', 'Ш', 'i', 'I', 'Ш', 'ш', 'I', 'i'],
        ['KeyO', 'щ', 'Щ', 'o', 'O', 'Щ', 'щ', 'O', 'o'],
        ['KeyP', 'з', 'З', 'p', 'P', 'З', 'з', 'P', 'p'],
        ['BracketLeft', 'х', 'Х', '[', '{', 'Х', 'х', '[', '{'],
        ['BracketRight', 'ъ', 'Ъ', ']', '}', 'Ъ', 'ъ', ']', '}'],
        ['Delete', 'DEL'],
        ['CapsLock', 'Caps Lock'],
        ['KeyA', 'ф', 'Ф', 'a', 'A', 'Ф', 'ф', 'A', 'a'],
        ['KeyS', 'ы', 'Ы', 's', 'S', 'Ы', 'ы', 'S', 's'],
        ['KeyD', 'в', 'В', 'd', 'D', 'В', 'в', 'D', 'd'],
        ['KeyF', 'а', 'А', 'f', 'F', 'А', 'а', 'F', 'f'],
        ['KeyG', 'п', 'П', 'g', 'G', 'П', 'п', 'G', 'g'],
        ['KeyH', 'р', 'Р', 'h', 'H', 'Р', 'р', 'H', 'h'],
        ['KeyJ', 'о', 'О', 'j', 'J', 'О', 'о', 'J', 'j'],
        ['KeyK', 'л', 'Л', 'k', 'K', 'Л', 'л', 'K', 'k'],
        ['KeyL', 'д', 'Д', 'l', 'L', 'Д', 'д', 'L', 'l'],
        ['Semicolon', 'ж', 'Ж', ';', ':', 'Ж', 'ж', ';', ':'],
        ['Quote', 'э', 'Э', "'", '"', 'Э', 'э', "'", '"'],
        ['Enter', 'Enter'],
        ['ShiftLeft', 'Shift'],
        ['KeyZ', 'я', 'Я', 'z', 'Z', 'Я', 'я', 'Z', 'z'],
        ['KeyX', 'ч', 'Ч', 'x', 'X', 'Ч', 'ч', 'X', 'x'],
        ['KeyC', 'с', 'С', 'c', 'C', 'С', 'с', 'C', 'c'],
        ['KeyV', 'м', 'М', 'v', 'V', 'М', 'м', 'V', 'v'],
        ['KeyB', 'и', 'И', 'b', 'B', 'И', 'и', 'B', 'b'],
        ['KeyN', 'т', 'Т', 'n', 'N', 'Т', 'т', 'N', 'n'],
        ['KeyM', 'ь', 'Ь', 'm', 'M', 'Ь', 'ь', 'M', 'm'],
        ['Comma', 'б', 'Б', ',', '<', 'Б', 'б', ',', '<'],
        ['Period', 'ю', 'Ю', '.', '>', 'Ю', 'ю', '.', '>'],
        ['Slash', '.', ',', '/', '?', '.', ',', '/', '?'],
        ['ArrowUp', '↑'],
        ['ShiftRight', 'Shift'],
        ['ControlLeft', 'Ctrl'],
        ['empty', 'ru/en'],
        ['AltLeft', 'Alt'],
        ['Space', ' '],
        ['AltRight', 'Alt'],
        ['ArrowLeft', '←'],
        ['ArrowDown', '↓'],
        ['ArrowRight', '→'],
        ['ControlRight', 'Ctrl'],
    ],
    '0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,38,39,40,43,44,45,46,47,48,49,50,51,52,53,58,60,61,62',
    localStorage.getItem('lang') || 'rus',
    new Audio('assets/click.mp3'),
    true,
    true,
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
            btn[i].textContent = words[i][3] || words[i][1]
        } else {
            btn[i].textContent = words[i][1]
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
        if (audioStatus) {
            audio.play()
        }
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
        textareaKeyboard.focus()
    })
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseleave', function (e) {
        e.target.classList.remove('btn-pressed')
        textareaKeyboard.focus()
    })
}

info[0].addEventListener('click', function () {
    if (audioStatus) {
        audio.play()
    }
    if (keyboardStatus) {
        keyboardWrapper.style.visibility = 'hidden'
        keyboardStatus = false
        info[0].textContent = 'ПОКАЗАТЬ'
    } else {
        keyboardWrapper.style.visibility = 'visible'
        keyboardStatus = true
        info[0].textContent = 'СКРЫТЬ'
    }
})

info[1].addEventListener('click', function () {
    if (audioStatus) {
        audioStatus = false
        info[1].textContent = 'ЗВУК OFF'
    } else {
        audioStatus = true
        info[1].textContent = 'ЗВУК ON'
    }
    if (audioStatus) {
        audio.play()
    }
})

info[2].addEventListener('click', function () {
    if (audioStatus) {
        audio.play()
    }
    alert(
        'Разработано для Windows, переключение языка кнопкой ru/en на виртуальной клавиатуре. Физическая клавиатура работает не с системным языком, а с языком виртуальной клавиатуры. Самопроверка продублирована в консоли. Frontending, для RSSchool, 2022'
    )
})

document.addEventListener('keydown', function (e) {
    for (let i = 0; i < btn.length; i++) {
        if (words[i][0] === e.code) {
            if (audioStatus) {
                audio.play()
            }
            e.preventDefault()
            btn[i].classList.add('btn-pressed')
            if (btnLetterList.split(',').includes(i.toString())) {
                textareaKeyboard.focus()
                if (
                    e.key.toLowerCase() !== btn[i].textContent &&
                    e.key !== 'ArrowUp' &&
                    e.key !== 'ArrowDown' &&
                    e.key !== 'ArrowLeft' &&
                    e.key !== 'ArrowRight'
                ) {
                    changeLocalStorage()
                    changeLang(langCurrent)
                }
                if (langCurrent === 'rus') {
                    textareaKeyboard.value += words[i][1]
                } else if (langCurrent === 'eng') {
                    textareaKeyboard.value += words[i][3] || words[i][1]
                }
                textareaKeyboard.focus()
            }
        }
    }
})

document.addEventListener('keyup', function (e) {
    for (let i = 0; i < btn.length; i++) {
        if (words[i][0] === e.code) {
            e.preventDefault()
            btn[i].classList.remove('btn-pressed')
        }
    }
})
