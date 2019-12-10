// Sounds
var loseSound = new Audio('sounds/lose.mp3')
var winSound = new Audio('sounds/win.mp3')
var clickSound = new Audio('sounds/click.mp3')

// Name
var playerName = ""


// Initial story line
document.querySelector(".story-window").innerHTML = "<p>The Evil Dino Empire has invaded Earth ! Their boss — the Mighty King Dino — prepares to rumble and eat every person on Earth. On the brink of collapse a legenary hero of unknown origin appeared.</p>"

// start game enter name
document.querySelector(".btnStart").addEventListener("click", function(){
  clickSound.play()
  playerName = prompt("Your Legendary Title: ")
  document.querySelector(".title").innerHTML = "<h2> The Legend of " + playerName + "</h2><p>An EPIC Journey Awaits</p>"
  document.querySelector(".story-window").innerHTML = "<p>BOO! A Terrifying Dinosour Jumps Out of Nowhere, and you wet your pants. But It's time for you to end this Legendary Fight with your ULTIMATE KILL MOVE.</p><img src='images/terrifyingDino.png'></img>"
  document.querySelector(".groupLore1").classList.add('invisible');
  document.querySelector(".groupLore2").classList.remove('invisible');
})

// spell
document.querySelector(".btnSpell").addEventListener("click", function(){
  clickSound.play()
  var spell = prompt("Yell Our Your Magical Words: ")
  document.querySelector(".container").classList.add('container3');
  document.querySelector(".story-window").innerHTML = "<p> '" + spell + "' !!!, you cried. But apparently you have rusty magic, and a boulder appears on your head and you're crushed to death. </p><img src='images/smashed.gif'></img><br><h1>THE END</h1>"
  document.querySelector(".groupLore2").classList.add('invisible');
  document.querySelector(".group4").classList.remove('invisible');
  loseSound.play()
})

// punch
document.querySelector(".btnPunch").addEventListener("click", function(){
  clickSound.play()
  document.querySelector(".story-window").innerHTML = "<p>Perhaps you've watched too much anime, your KILL MOVE has no effect and King Dino Knocks you down.</p><img src='images/punch.gif'></img>"
  document.querySelector(".groupLore2").classList.add('invisible');
  document.querySelector(".groupLore3").classList.remove('invisible');
})

// Wake up
document.querySelector(".btnWake").addEventListener("click", function(){
  document.querySelector(".title").innerHTML = "<h2> The Not So Legendary Legend of " + playerName + "</h2><p>A Pretty Pathetic Journey Awaits</p>"
  document.querySelector(".story-window").innerHTML = "<p>'Hold up, Where am I?'<br>You wake up in the middle of your web dev exam. There are only 30 seconds left. You looked at your blank paper and sigh...</p><img src='https://media1.giphy.com/media/JRPftUYuIRw3axuh5y/giphy.gif'></img>"
  document.querySelector(".groupLore3").classList.add('invisible');
  document.querySelector(".group1").classList.remove('invisible');
  document.querySelector(".container").classList.add('container1');
  clickSound.play()
})

// gaveup
document.querySelector(".btn1").addEventListener("click", function(){
  document.querySelector(".story-window").innerHTML = "<p>You quickly write your name on the paper and there's still 10 seconds left</p><img src='https://media.giphy.com/media/yFHkrrbfITemc/giphy.gif'></img>";
  document.querySelector(".group1").classList.add('invisible');
  document.querySelector(".group2").classList.remove('invisible');
  clickSound.play()
})

// Do first question
document.querySelector(".btn2").addEventListener("click", function(){
  document.querySelector(".story-window").innerHTML = "<p>The question reads: 'Who is your favorite teacher?'</p><br><p>CHOICE A: Mr. Kung</p><br><p>CHOICE B: Mr. Kung </p>";
  document.querySelector(".group1").classList.add('invisible');
  document.querySelector(".group3").classList.remove('invisible');
  clickSound.play()
})

// doodle
document.querySelector(".btn3").addEventListener("click", function(){
  document.querySelector(".container").classList.add('container2');
  document.querySelector(".group2").classList.add('invisible');
  document.querySelector(".group4").classList.remove('invisible');
  document.querySelector(".story-window").innerHTML = "<p>You decide to doodle Mr. Kung's favorite character Mr. Dino. Mr. Kung was so happy that he gives your 200% on your test</p><img src='images/doodle.jpg'></img><br><h1>THE END</h1>";
  winSound.play()
})

// sleep
document.querySelector(".btn4").addEventListener("click", function(){
  document.querySelector(".container").classList.add('container3');
  document.querySelector(".group2").classList.add('invisible');
  document.querySelector(".group4").classList.remove('invisible');
  document.querySelector(".story-window").innerHTML = "<p>As expected, Mr. Kung gave you a solid 0 on your test. Your grade drops to C and now you have to stay after school</p><img src='https://media.makeameme.org/created/im-going-to-5c7a99.jpg'></img><br><h1>THE END</h1>";
  loseSound.play()
})

// choice A
document.querySelector(".btn5").addEventListener("click", function(){
  document.querySelector(".container").classList.add('container3');
  document.querySelector(".group3").classList.add('invisible');
  document.querySelector(".group4").classList.remove('invisible');
  document.querySelector(".story-window").innerHTML = "<p>That is a obvious choice, and you turn it in. Mr. Kung gives you 10 points because of your honesty</p><img src='https://media0.giphy.com/media/xUNd9IchxKZadO3XMc/giphy.gif'></img><br><h1>THE END</h1>";
  loseSound.play()
})

// choice B
document.querySelector(".btn6").addEventListener("click", function(){
  document.querySelector(".container").classList.add('container3');
  document.querySelector(".group3").classList.add('invisible');
  document.querySelector(".group4").classList.remove('invisible');
  document.querySelector(".story-window").innerHTML = "<p>You circle both options hoping to delight Mr. Kung. A day later you received a 0 on your test since your're only suppose to choose one option</p><img src='https://i.imgur.com/9Uqc2nh.jpg'></img><br><h1>THE END</h1>";
  loseSound.play()
})

// restart all
document.querySelector(".btn7").addEventListener("click", function(){
  document.querySelector(".title").innerHTML = "<h2> The Legend</h2><p>An EPIC Journey Awaits</p>"
  document.querySelector(".container").classList.remove('container1');
  document.querySelector(".container").classList.remove('container2');
  document.querySelector(".container").classList.remove('container3');
  document.querySelector(".groupLore2").classList.add('invisible');
  document.querySelector(".groupLore3").classList.add('invisible');
  document.querySelector(".group1").classList.add('invisible');
  document.querySelector(".group2").classList.add('invisible');
  document.querySelector(".group3").classList.add('invisible');
  document.querySelector(".group4").classList.add('invisible');
  document.querySelector(".groupLore1").classList.remove('invisible');
  document.querySelector(".story-window").innerHTML = "<p>The Evil Dino Empire has invaded Earth ! Their boss — the Mighty King Dino — prepares to rumble and eat every person on Earth. On the brink of collapse a legenary hero of unknown origin appeared.</p>"
  winSound.load();
  loseSound.load();
  clickSound.play();
})
