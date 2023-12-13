const wordsEze = [
{ english: "apple", ukraine: "яблуко" },
{ english: "book", ukraine: "книга" },
{ english: "cat", ukraine: "кіт" },
{ english: "dog", ukraine: "собака" },
{ english: "melancholy", ukraine: "меланхолія" },
{ english: "moon", ukraine: "місяць" },
{ english: "laptop", ukraine: "ноутбук" },
{ english: "luck", ukraine: "вдача" },
{ english: "courage", ukraine: "сміливість" },
{ english: "adventure", ukraine: "пригода" }
];
const wordsMedium = [
  { english: "perspicacity", ukraine: "проникливість" },
  { english: "serendipity", ukraine: "везіння" },
  { english: "envy", ukraine: "заздрити" },
  { english: "omnipotent", ukraine: "всемогутній" },
  { english: "magic", ukraine: "магія" },
  { english: "resilience", ukraine: "стійкість" },
  { english: "nostalgia", ukraine: "ностальгія" },
  { english: "eloquence", ukraine: "красномовство" },
  { english: "ameliorate", ukraine: "покращувати" },
  { english: "evolution", ukraine: "еволюція" }
];
const wordsHard = [
  { english: "antidisestablishmentarianism", ukraine: "антидисестаблішментаризм" },
  { english: "floccinaucinihilipilification", ukraine: "флоксинауцинихіліпіліфікація" },
  { english: "antidisestablishmentarianism", ukraine: "антидисестаблишментарианство" },
  { english: "hippopotomonstrosesquippedaliophobia", ukraine: "гіппопотомонстросесквіпедаліофобія" },
  { english: "supercalifragilisticexpialidocious", ukraine: "суперкаліфрагілістикекспіалідоціоз" },
  { english: "incomprehensibilities", ukraine: "незбагненності" },
  { english: "psychoneuroendocrinological", ukraine: "психоневроендокринологічний" },
  { english: "thyroparathyroidectomized", ukraine: "тиреопаратироїдектомований" },
  { english: "pseudopseudohypoparathyroidism", ukraine: "псевдопсевдогіпопаратироїдизм" },
  { english: "electroencephalographically", ukraine: "електроенцефалографічно" }
];

  let check = false;
  let currentLevel = "easy";
  $('input[type="radio"][name="levels"]').change(function() {
      currentLevel = this.value;
        console.log(currentLevel);
      check = true;
  });

const levels = {
  easy: wordsEze,
  medium: wordsMedium,
  hard: wordsHard
}
    let numbers1 = 0;
    let iter = 0;
    let iteracia = 0;
    let win = 0;
    let loss = -1;
    const trymas = [];


    for(let i = 0; i < levels[currentLevel].length; i++){
      let newNumber = 0;
      do {
        newNumber =  Math.floor(Math.random()*10);
      } while (trymas.includes(newNumber))
      trymas.push(newNumber);
    }
    function swapLeft() {
      console.log("iteracia " + iteracia);
      if(iteracia > 0){
      iteracia--;
      $("#textQuestion").text(levels[currentLevel][trymas[iteracia]].english);
      $("#checkedNumber").text(iteracia+1);
    }
    }
    function swapRight(){
      console.log("iteracia " + iteracia);
      if(iteracia < 10){
        iteracia++;
        $("#textQuestion").text(levels[currentLevel][trymas[iteracia]].english);
        $("#checkedNumber").text(iteracia+1);
    }
  }
  function checked() {
    if(check){
      numbers1 = 0;
      check = false;
      iteracia = 0;
      win = 0;
      loss = -1;
      iter = 0;

      trymas.length=0;
      for(let i = 0; i < levels[currentLevel].length; i++){
        let newNumber = 0;
        do {
          newNumber =  Math.floor(Math.random()*10);
        } while (trymas.includes(newNumber))
        trymas.push(newNumber);
      }
    }
      iteracia++;
      if(iteracia == 11){
        $("#button").off('click',  checked);
        $("#arrowRight").on('click', swapRight);
        $("#arrowLeft").on('click', swapLeft);
        switch (true) {
          case win < 3:
              alert("Ваш рівень знань англійської, занадто низький, ваша оцінка " + win + "/10");
            break;
          case win < 7:
              alert("Ваш рівень знань англійської, середнього рівня, ваша оцінка " + win + "/10");
            break;
          case win <= 10:
              alert("Ваш рівень англійської, високого рівня, ваша оцінка " + win + "/10");
            break;
          default:

        }
        alert("Оновіть данні");
      }
    let text = $("#text").val().toLowerCase().trim();
      if(text === levels[currentLevel][numbers1].ukraine){
      win++;
      $("#win").text(win);
      $("#text").val('');
    } else {
      loss++;
      $("#loss").text(loss);
      $("#text").val('');
      if(iteracia > 1){
        alert("correct answer " + levels[currentLevel][numbers1].ukraine);
      }

    }
      console.log(trymas);
      numbers1 = trymas[iter];
      iter++;
      console.log(numbers1);
      console.log("iteracia " + iteracia);
      $("#textQuestion").text(levels[currentLevel][numbers1].english);
      $("#checkedNumber").text(iteracia);

  }

    $("#button").on('click', checked);

        $("#restart").on('click', function restart() {
          $("#button").off('click',  checked);
           numbers1 = 0;
           iter = 0;
           iteracia = 0;
           win = 0;
           loss = -1;
           $("#win").text(win);
           $("#loss").text(0);
          $("#checkedNumber").text(iteracia);
          $("#textQuestion").text("Натисніть кнопку, щоб почати!");
          trymas.length=0;
          for(let i = 0; i < levels[currentLevel].length; i++){
            let newNumber = 0;
            do {
              newNumber =  Math.floor(Math.random()*10);
            } while (trymas.includes(newNumber))
            trymas.push(newNumber);
          }
          $("#button").on('click',  checked);
        });
