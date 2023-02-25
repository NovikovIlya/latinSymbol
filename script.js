const innerText = document.querySelector('#latin-text')
const outerText  = document.querySelector('.latin-result > pre > code')

document.querySelector('button').onclick = function(){
    //Получили текст
    // let text = innerText.value.trim();
    // if (text === '') return;

    // //Решение на основе шаблонной строки
    // const t = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+-={}[]?.,;:\'\"\\/';
    // let out = '';

    // for (let i = 0;i<text.length;i++){
    //     if (text[i] === '>'){
    //         out += '&#x3E;'
    //     }
    //     else if (text[i] === '<'){
    //         out += '&#x3C;'
    //     }
    //     else if (text[i] === '\n'){
    //         out += '<br>'
    //     }
    //     else if(t.indexOf(text[i]) === -1){
    //         out +='<mark>' + text[i] + '</mark>'
    //     }
    //     else {
    //         out += text[i]
    //     }
    // }

    console.log(out);
    outerText.innerHTML = out;
}



document.querySelector('button').onclick = function(){
    let text = innerText.value.trim();
    if (text === '') return;

    let result;

    let regexp = /[^\w\s.,;:\-+_()'"]/gmi;

    result = text.replace(regexp, symbol => '<mark>' + symbol + '</mark>');

    console.log(result);
    outerText.innerHTML = result;
    
}