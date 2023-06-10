// Random Capitalization
document.getElementById("btnCapitalize").addEventListener("click", function() {
    var inputText = document.getElementById("input1").value;
    var outputText = capitalizeRandomly(inputText);
    document.getElementById("outputText1").value = outputText;
  });
  
  document.getElementById("btnCopy1").addEventListener("click", function() {
    var outputText = document.getElementById("outputText1");
    outputText.select();
    document.execCommand("copy");
    showCopiedText("copyText1");
  });
  
  // Add Emojis
  document.getElementById("btnAddEmoji").addEventListener("click", function() {
    var inputText = document.getElementById("input2").value;
    var outputText = addEmojis(inputText);
    document.getElementById("outputText2").value = outputText;
  });
  
  document.getElementById("btnCopy2").addEventListener("click", function() {
    var outputText = document.getElementById("outputText2");
    outputText.select();
    document.execCommand("copy");
    showCopiedText("copyText2");
  });
  
  function capitalizeRandomly(text) {
    var words = text.split(" ");
    var output = "";
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var randomizedWord = "";
      
      for (var j = 0; j < word.length; j++) {
        var char = word[j];
        
        if (Math.random() < 0.5) {
          randomizedWord += char.toUpperCase();
        } else {
          randomizedWord += char.toLowerCase();
        }
      }
      
      output += randomizedWord + " ";
    }
    
    return output.trim();
  }
  
  function addEmojis(text) {
    var words = text.split(" ");
    var output = "";
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var emoji = getEmoji();
      output += word + " " + emoji + " ";
    }
    
    return output.trim();
  }
  
  function getEmoji() {
    var emojis = ["😀", "😃", "😄", "😁", "😆", "😊", "😎", "🙂", "🤩", "🥳", "🤗", "😍", "🥰", "😘", "😋", "🤪", "😜", "😎", "🤓", "🤠", "😏", "🙌", "👍", "👏", "🎉", "🔥", "💯", "🌟", "✨", "💪", "👊", "💁‍♀️", "🙆‍♂️", "🙇‍♀️", "🤦‍♂️", "🙅‍♂️", "🙋‍♀️", "🤷‍♂️", "🙎‍♀️", "🙋‍♂️", "🙇‍♂️", "🤷‍♀️", "🙅‍♀️", "🙆‍♀️", "🤦‍♀️", "🙍‍♂️", "🤳", "💅", "💃", "🕺", "🧠", "🦄", "🦾", "🧜‍♀️", "👽", "🤖", "🌈", "💥", "🍕", "🍔", "🍟", "🥤", "🎮", "🎧", "🎤", "🎬", "📸", "🎉", "🏆", "🔑", "💡", "💻", "📱", "💣", "🛒", "🎈", "💌", "💖", "💙", "💚", "💜", "💔", "💀", "👻", "🎃", "🌻", "🍀", "🍁", "☀️", "❄️", "🌈", "🌍", "⭐️", "🌙", "🔮", "💎", "🎶", "🍕", "🍔", "🌮", "🍿", "🍩", "🍦", "🍭", "🍉", "🍓", "🍌", "🍇", "🍒", "🍍", "🥑", "🥦", "🥕", "🍆", "🥔"];
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }    
  
  
  function showCopiedText(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.style.display = "inline";
    setTimeout(function() {
      copyText.style.display = "none";
    }, 2000);
  }

  function copyText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.value;
    
    navigator.clipboard.writeText(text);
    
    alert('Copied!');
  }
  
  
  