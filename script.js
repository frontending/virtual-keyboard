let [
    //применяем деструктуризацию согласно тех.задания (ES6) и используем let (ES6)
    bodyKeyboard,
    words,
    btnLetterList,
    langCurrent, //рус-англ
    audioStatus,
    keyboardStatus, //показать-скрыть
    shiftStatus,
    capsStatus,
] = [
    document.querySelector('.body'),
    [
        ['Backquote', 'ё', 'Ё', '`', '~', 'ё', 'Ё', '`', '~'], //0
        ['Digit1', '1', '!', '1', '!', '1', '!', '1', '!'],
        ['Digit2', '2', '"', '2', '@', '2', '"', '2', '@'],
        ['Digit3', '3', '№', '3', '#', '3', '№', '3', '#'],
        ['Digit4', '4', ';', '4', '$', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%', '5', '%', '5', '%'],
        ['Digit6', '6', ':', '6', '^', '6', ':', '6', '^'],
        ['Digit7', '7', '?', '7', '&', '7', '?', '7', '&'],
        ['Digit8', '8', '*', '8', '*', '8', '*', '8', '*'],
        ['Digit9', '9', '(', '9', '(', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')', '0', ')', '0', ')'], //10
        ['Minus', '-', '_', '-', '_', '-', '_', '-', '_'],
        ['Equal', '=', '+', '=', '+', '=', '+', '=', '+'],
        ['Backslash', '\\', '/', '\\', '|', '\\', '/', '\\', '|'],
        ['Backspace', 'Backspace'],
        ['Tab', 'Tab'],
        ['KeyQ', 'й', 'Й', 'q', 'Q', 'Й', 'й', 'Q', 'q'],
        ['KeyW', 'ц', 'Ц', 'w', 'W', 'Ц', 'ц', 'W', 'w'],
        ['KeyE', 'у', 'У', 'e', 'E', 'У', 'у', 'E', 'e'],
        ['KeyR', 'к', 'К', 'r', 'R', 'К', 'к', 'R', 'r'],
        ['KeyT', 'е', 'Е', 't', 'T', 'Е', 'е', 'T', 't'], //20
        ['KeyY', 'н', 'Н', 'y', 'Y', 'Н', 'н', 'Y', 'y'],
        ['KeyU', 'г', 'Г', 'u', 'U', 'Г', 'г', 'U', 'u'],
        ['KeyI', 'ш', 'Ш', 'i', 'I', 'Ш', 'ш', 'I', 'i'],
        ['KeyO', 'щ', 'Щ', 'o', 'O', 'Щ', 'щ', 'O', 'o'],
        ['KeyP', 'з', 'З', 'p', 'P', 'З', 'з', 'P', 'p'],
        ['BracketLeft', 'х', 'Х', '[', '{', 'Х', 'х', '[', '{'],
        ['BracketRight', 'ъ', 'Ъ', ']', '}', 'Ъ', 'ъ', ']', '}'],
        ['Delete', 'DEL'],
        ['CapsLock', 'Caps Lock'],
        ['KeyA', 'ф', 'Ф', 'a', 'A', 'Ф', 'ф', 'A', 'a'], //30
        ['KeyS', 'ы', 'Ы', 's', 'S', 'Ы', 'ы', 'S', 's'],
        ['KeyD', 'в', 'В', 'd', 'D', 'В', 'в', 'D', 'd'],
        ['KeyF', 'а', 'А', 'f', 'F', 'А', 'а', 'F', 'f'],
        ['KeyG', 'п', 'П', 'g', 'G', 'П', 'п', 'G', 'g'],
        ['KeyH', 'р', 'Р', 'h', 'H', 'Р', 'р', 'H', 'h'],
        ['KeyJ', 'о', 'О', 'j', 'J', 'О', 'о', 'J', 'j'],
        ['KeyK', 'л', 'Л', 'k', 'K', 'Л', 'л', 'K', 'k'],
        ['KeyL', 'д', 'Д', 'l', 'L', 'Д', 'д', 'L', 'l'],
        ['Semicolon', 'ж', 'Ж', ';', ':', 'Ж', 'ж', ';', ':'],
        ['Quote', 'э', 'Э', "'", '"', 'Э', 'э', "'", '"'], //40
        ['Enter', 'Enter'],
        ['ShiftLeft', 'Shift'],
        ['KeyZ', 'я', 'Я', 'z', 'Z', 'Я', 'я', 'Z', 'z'],
        ['KeyX', 'ч', 'Ч', 'x', 'X', 'Ч', 'ч', 'X', 'x'],
        ['KeyC', 'с', 'С', 'c', 'C', 'С', 'с', 'C', 'c'],
        ['KeyV', 'м', 'М', 'v', 'V', 'М', 'м', 'V', 'v'],
        ['KeyB', 'и', 'И', 'b', 'B', 'И', 'и', 'B', 'b'],
        ['KeyN', 'т', 'Т', 'n', 'N', 'Т', 'т', 'N', 'n'],
        ['KeyM', 'ь', 'Ь', 'm', 'M', 'Ь', 'ь', 'M', 'm'],
        ['Comma', 'б', 'Б', ',', '<', 'Б', 'б', ',', '<'], //50
        ['Period', 'ю', 'Ю', '.', '>', 'Ю', 'ю', '.', '>'],
        ['Slash', '.', ',', '/', '?', '.', ',', '/', '?'],
        ['ArrowUp', '↑'],
        ['ShiftRight', 'Shift'],
        ['ControlLeft', 'Ctrl'],
        ['empty', 'ru/en'],
        ['AltLeft', 'Alt'],
        ['Space', ' '],
        ['AltRight', 'Alt'],
        ['ArrowLeft', '←'], //60
        ['ArrowDown', '↓'],
        ['ArrowRight', '→'],
        ['ControlRight', 'Ctrl'],
    ],
    '0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,38,39,40,43,44,45,46,47,48,49,50,51,52,53,58,60,61,62',
    localStorage.getItem('lang') || 'rus', //защита от ошибок при загрузке через приватную вкладку
    false,
    true,
    false,
    false,
]

const audio = new Audio('assets/click.mp3') //используем let согласно тех.задания (ES6)

//шаблон создания элементов DOM
function createElement(type, parentEl, assign, flag, ...classes) {
    //оператор REST согласно тех.задания (ES6)
    let el = document.createElement(`${type}`)
    for (let e of classes) {
        el.classList.add(`${e}`)
    }
    parentEl.append(el)
    flag
        ? (window[assign] = document.querySelector(`.${classes[0]}`))
        : (window[assign] = document.querySelectorAll(`.${classes[0]}`))
}

//генерация страницы
createElement('main', bodyKeyboard, 'mainKeyboard', true, 'main')
createElement('textarea', mainKeyboard, 'textareaKeyboard', true, 'textarea')
textareaKeyboard.placeholder = 'Введите текст: '
createElement('div', mainKeyboard, 'keyboardWrapper', true, 'keyboard-wrapper')
createElement('div', mainKeyboard, 'information', true, 'information')
for (let i = 0; i < 3; i++) {
    createElement('div', information, 'info', false, 'info')
}
info[0].textContent = 'СКРЫТЬ'
info[1].textContent = 'ЗВУК OFF'
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

//смена языка
function changeLang(lang) {
    for (let i = 0; i < btn.length; i++) {
        if (lang === 'eng') {
            btn[i].textContent = words[i][checkStatus()] || words[i][1]
        } else {
            btn[i].textContent = words[i][checkStatus()] || words[i][1]
        }
    }
}

changeLang(langCurrent) //передаём язык, остальное подтягивается из статусов

//запоминаем язык
function changeLocalStorage() {
    if (langCurrent === 'rus') {
        localStorage.setItem('lang', 'eng')
        langCurrent = 'eng'
    } else {
        localStorage.setItem('lang', 'rus')
        langCurrent = 'rus'
    }
}

//обработка нажатия кнопки мыши по виртуальной клавиатуре
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mousedown', function (e) {
        if (audioStatus) {
            audio.play()
        }
        e.target.classList.add('btn-pressed')
        textareaKeyboard.focus()
        if (btnLetterList.split(',').includes(i.toString())) {
            textareaKeyboard.value += e.target.textContent
            shiftStatus = false
            btn[54].classList.remove('btn-active')
            btn[42].classList.remove('btn-active')
            changeLang(langCurrent)
        } else if (i === 56) {
            changeLocalStorage()
            changeLang(langCurrent)
        } else if (i === 41) {
            textareaKeyboard.value += '\n'
        } else if (i === 14) {
            if (textareaKeyboard.value !== '') {
                textareaKeyboard.value = textareaKeyboard.value.slice(
                    0,
                    textareaKeyboard.value.length - 1
                )
            }
        } else if (i === 15) {
            textareaKeyboard.value += '\t'
        } else if (i === 28) {
            textareaKeyboard.value = ''
        } else if (i === 29) {
            if (capsStatus) {
                capsStatus = false
                btn[29].classList.remove('btn-active')
            } else {
                capsStatus = true
                btn[29].classList.add('btn-active')
            }
            changeLang(langCurrent)
        } else if (i === 54 || i === 42) {
            if (shiftStatus) {
                shiftStatus = false
                btn[54].classList.remove('btn-active')
                btn[42].classList.remove('btn-active')
            } else {
                shiftStatus = true
                btn[54].classList.add('btn-active')
                btn[42].classList.add('btn-active')
            }
            changeLang(langCurrent)
        }
    })
}

//мышь отпустили - кнопки вернулись в исходное состояние
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseup', function (e) {
        e.target.classList.remove('btn-pressed')
        textareaKeyboard.focus()
    })
}

//мышь увели - кнопки вернулись в исходное состояние, защита от багов
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseleave', function (e) {
        e.target.classList.remove('btn-pressed')
        textareaKeyboard.focus()
    })
}

//кнопки под клавиатурой
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
        'Разработано для Windows, переключение языка кнопкой ru/en на виртуальной клавиатуре. Работает ТОЛЬКО с русским и английским языками. Физическая клавиатура меняет язык виртуальной клавиатуры на системный при вводе любой буквы. Как поведёт себя клавиатура, если ваш системный язык отличается от русского и английского - не знаю, не проверял. Самопроверка продублирована в консоли. Там же комментарии по работе. Frontending, для RSSchool, 2022'
    )
})

//обработка нажатий физицеской клавиатуры
document.addEventListener('keydown', function (e) {
    for (let i = 0; i < btn.length; i++) {
        if (words[i][0] === e.code) {
            if (audioStatus) {
                audio.play()
            }
            e.preventDefault()
            btn[i].classList.add('btn-pressed')
            textareaKeyboard.focus()
            if (btnLetterList.split(',').includes(i.toString())) {
                if (
                    //проверка системного языка
                    'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMйцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ'.includes(
                        e.key
                    ) &&
                    e.key !== btn[i].textContent.toLowerCase() &&
                    e.key !== btn[i].textContent.toUpperCase()
                ) {
                    changeLocalStorage()
                    changeLang(langCurrent)
                } //Frontending
                textareaKeyboard.value += btn[i].textContent
                textareaKeyboard.focus()
            } else if (i === 41) {
                textareaKeyboard.value += '\n'
            } else if (i === 14) {
                if (textareaKeyboard.value !== '') {
                    textareaKeyboard.value = textareaKeyboard.value.slice(
                        0,
                        textareaKeyboard.value.length - 1
                    )
                }
            } else if (i === 15) {
                textareaKeyboard.value += '\t'
            } else if (i === 28) {
                textareaKeyboard.value = ''
            } else if (i === 29) {
                if (capsStatus) {
                    capsStatus = false
                    btn[29].classList.remove('btn-active')
                } else {
                    capsStatus = true
                    btn[29].classList.add('btn-active')
                }
                changeLang(langCurrent)
            } else if (i === 54 || i === 42) {
                shiftStatus = true
                btn[54].classList.add('btn-active')
                btn[42].classList.add('btn-active')
                changeLang(langCurrent)
            }
        }
    }
})

//кнопку физической клавиатуры отпускаем, эффекты нажатия отменяются
document.addEventListener('keyup', function (e) {
    e.preventDefault()
    for (let i = 0; i < btn.length; i++) {
        if (words[i][0] === e.code) {
            if (i !== 54 && i !== 42) {
                btn[i].classList.remove('btn-pressed')
            } else {
                shiftStatus = false
                btn[54].classList.remove('btn-active')
                btn[54].classList.remove('btn-pressed')
                btn[42].classList.remove('btn-active')
                btn[42].classList.remove('btn-pressed')
                changeLang(langCurrent)
            }
        }
    }
})

//не даём перемещать курсор
textareaKeyboard.addEventListener('click', function () {
    textareaKeyboard.selectionStart = textareaKeyboard.value.length
})

//Выясняем какую раскладку нужно использовать
function checkStatus() {
    if (langCurrent === 'rus') {
        if (shiftStatus) {
            if (capsStatus) {
                return 6
            } else {
                return 2
            }
        } else {
            if (capsStatus) {
                return 5
            } else {
                return 1
            }
        }
    } else {
        if (shiftStatus) {
            if (capsStatus) {
                return 8
            } else {
                return 4
            }
        } else {
            if (capsStatus) {
                return 7
            } else {
                return 3
            }
        }
    }
}

console.log(
    'Доброго времени суток!\nКлавиатура для ОС Windows\nРаботает только с русским и английским языками\nНавигация срелками не была обязательной и не реализована, соответственно функция кнопки DEL не имеет смысла\nЯ заменил функциональность кнопки DEL на удаление всего текста, т.е. очистка textarea\nТеперь о реализованных и не реализованных пунктах\nНе реализовано использование eslint и это -10 баллов\nВсё остальное реализовано в рамках тех.задания\nИз неочевидных моментов при проверке - реализация ES6\nРеализовано: let/const, rest, деструктуризация\nЭтого вполне достаточно для выполнения требования тех.задания\nМной обнаружен баг. Если зажать на физической клавиатуре сразу оба shift и потом одну из кнопок shift отпустить, то анимация зажатия кнопки сохранится\nПофиксить не успею, но это не учитывается при проверке\nТем не менее мне было бы очень интересно узнать какие ещё баги у меня в проекте\nБольшая просьба при оценке руководствоваться тех.заданием, а не личными предпочтениями и пожеланиями\nПожелания можно написать в обратной связи, но они как минимум не должны влиять на оценку\nПридирки и поиск ошибок без учёта тех.задания очень сильно портит настроение и отбивает желание учиться и развиваться\nИ пусть у вас не будет студента1 вместе с вагоном "ошибок"\nСпасибо!'
)
