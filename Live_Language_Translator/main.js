let langOption = document.querySelectorAll('select');
let fromtext  = document.querySelector('.fromtext');
let transtext = document.querySelector('.totext');
let fromVoice = document.querySelector('.from');
let toVoice = document.querySelector('.to');
let cpyBtn = document.querySelector('.bx-copy');
let countValue = document.querySelector('.text-length');
let exchangLang = document.querySelector('.bx-transfer');

langOption.forEach((get,con) =>{
    for(let countryCode in language){
        
        let selected;
        if(con == 0 && countryCode == "en-GB"){
            selected = "selected"; 
        }
        else if(con == 1 && countryCode == "hi-IN"){
            selected = "selected";
        }

        let option = `<option value="${countryCode} " ${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend',option)
    }
})

fromtext.addEventListener('input',function(){
    let content = fromtext.value;
    fromContent = langOption[0].value;
    transContent = langOption[1].value;

    let transLink = ` https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;

    fetch(transLink).then(translate => translate.json()).then(data => {
        transtext.value = data.responseData.translatedText;
    })
}) 
fromVoice.addEventListener('click',function() {
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromtext.value);
    fromTalk.lang =  langOption[0].value;
    speechSynthesis.speak(fromTalk)
}) 

toVoice.addEventListener('click',function(){
    let toTalk;
    toTalk = new SpeechSynthesisUtterance(transtext.value);
    toTalk.lang = langOption[1].value;
    speechSynthesis.speak(toTalk)
})

cpyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(transtext.value);
})

fromtext.addEventListener('keyup',function(){
    countValue.innerHTML = `${fromtext.value.length}/3000`;
})
exchangLang.addEventListener('click',function(){
    let tempText = fromtext.value;
    fromtext.value = transtext.value;
    transtext.value = tempText;
})