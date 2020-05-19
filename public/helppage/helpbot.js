
function setup() {

    let bot = new RiveScript();
    bot.loadFile("brain.rive", brainReady, brainError);

    function brainReady(){
        console.log('Chatbotten fejlede')
    }

    function brainError(){
        console.log('Chatbotten er klar!')
    }

    let button = select('#submit');
    let user_input = select('#user_input');
    let output = select('#output');

    button.mousePressed(chat);

    function chat() {
        let input = user_input.value();
        output.html(input);
    }
}