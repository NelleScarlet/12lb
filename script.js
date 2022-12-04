const words_elementary =[
    {word: "Deliver", answer: "Доставити"},
    {word: "Descend", answer: "Спускатися"},
    {word: "Concentrate", answer: "Концентрат"},
    {word: "Distract", answer: "Відволікати"},
    {word: "Confuse", answer: "Плутати"},
    {word: "Construct", answer: "Побудувати"},
    {word: "Transfer", answer: "Передача"},
    {word: "Employ", answer: "Найняти"},
    {word: "Catch", answer: "Виловити"},
    {word: "Commit", answer: "Здійснити"},
];
const words_advance =[
    {word: "Abate", answer: "Зменшуватися"},
    {word: "Disabuse", answer: "Зневірити"},
    {word: "Equivocate", answer: "Двозначно"},
    {word: "Incise", answer: "Надрізати"},
    {word: "Prevaricate", answer: "Ухилятися"},
    {word: "Ignoble", answer: "Неблагородний"},
    {word: "Swap", answer: "Обмін"},
    {word: "Append", answer: "Додавати"},
    {word: "Entail", answer: "Дарувати"},
    {word: "Resort", answer: "Звернення"},
];
const words_normal =[
    {word: "Do", answer: "Робити"},
    {word: "Feel", answer: "Відчувати"},
    {word: "See", answer: "Бачити"},
    {word: "Hear", answer: "Чути"},
    {word: "Run", answer: "Бігати"},
    {word: "Get", answer: "Отримати"},
    {word: "Make", answer: "Зробити"},
    {word: "Cook", answer: "Готувати"},
    {word: "Sing", answer: "Співати"},
    {word: "Speak", answer: "Говорити"},
];

$(window).on("load", function() {
    $("#true").css("color", "green");
    $("#false").css("color", "red");

    let length = words_normal.length;
    let random = Math.floor(Math.random() * length), count = 1, temp_words = [10], temp_answer = [10];
    let check = 0;

    for(let i = 0; i < length; i++) {
        random = Math.floor(Math.random() * (length - i)) + i;

        temp_words[i] = words_normal[random].word;
        temp_answer[i] = words_normal[random].answer;

        words_normal[random].word = words_normal[i].word;
        words_normal[random].answer = words_normal[i].answer;

        words_normal[i].word = temp_words[i];
        words_normal[i].answer = temp_answer[i];
    }

    $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");
    
    $("#left").on("click", function() {
        if(count != 1)
        {
            count--;
            check++;
            $("#count").html(count + " / 11");
            $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");
            $("answer").val("");
        }
        else { alert("Error"); }
    });

    $("#button_elementary").on("click", function() {
        $("#button_elementary").attr("disabled", true);
        $("#button_advance").attr("disabled", false);

        for(let i = 0; i < length; i++) {
            random = Math.floor(Math.random() * (length - i)) + i;
    
            temp_words[i] = words_elementary[random].word;
            temp_answer[i] = words_elementary[random].answer;
    
            words_elementary[random].word = words_elementary[i].word;
            words_elementary[random].answer = words_elementary[i].answer;
    
            words_elementary[i].word = temp_words[i];
            words_elementary[i].answer = temp_answer[i];
        }

    });

    $("#button_advance").on("click", function() {
        $("#button_advance").attr("disabled", true);
        $("#button_elementary").attr("disabled", false);

        for(let i = 0; i < length; i++) {
            random = Math.floor(Math.random() * (length - i)) + i;
    
            temp_words[i] = words_advance[random].word;
            temp_answer[i] = words_advance[random].answer;
    
            words_advance[random].word =  words_advance[i].word;
            words_advance[random].answer = words_advance[i].answer;
    
            words_advance[i].word = temp_words[i];
            words_advance[i].answer = temp_answer[i];
        }
    });

    $("#right").on("click", function() {
        if(count < 11) {
            count++;
            $("#count").html(count + " / 11");
            $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");

            if(check == 0) {
                if($("#answer").val() == temp_answer[count - 2]) {
                    $("#true").text(Number($("#true").text()) + 1);
                }
                else {
                    $("#false").text(Number($("#false").text()) + 1);
                }
            }

            let result = Number($("#true").text());
            if(count == 11)
            {
                $(".container").html( "<h1>" + "</h1>");
                alert("Your results are:" + " " + result + " " + "true translates");
            }
        }
    });
});
