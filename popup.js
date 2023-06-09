document.addEventListener("DOMContentLoaded", function() {
    // Random Capitalization
    document.getElementById("btnCapitalize").addEventListener("click", function() {
      var inputText = document.getElementById("input1").value;
      var outputText = capitalizeRandomly(inputText);
      document.getElementById("outputText1").value = outputText;
    });
  
    document.getElementById("btnCopy1").addEventListener("click", function() {
      var outputText = document.getElementById("outputText1").value;
      copyText(outputText);
    });
  
    // Add Emojis
    document.getElementById("btnAddEmoji").addEventListener("click", function() {
      var inputText = document.getElementById("input2").value;
      var outputText = addEmojis(inputText);
      document.getElementById("outputText2").value = outputText;
    });
  
    document.getElementById("btnCopy2").addEventListener("click", function() {
      var outputText = document.getElementById("outputText2").value;
      copyText(outputText);
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
      var emojis = ["😀", "😃", "😄", "😁", "😆", "😊", "😎", "🙂", "🤩", "🥳", "🤗", "😍", "🥰", "😘", "😋", "🤪", "😜", "😎", "🤓", "🤠", "😏", "🙌", "👍", "👏", "🎉", "🔥", "💯", "🌟", "✨", "💪", "👊"];
      var randomIndex = Math.floor(Math.random() * emojis.length);
      return emojis[randomIndex];
    }
  
    function copyText(inputElementId, outputElementId, copyTextElementId) {
        var inputElement = document.getElementById(inputElementId);
        var outputElement = document.getElementById(outputElementId);
        var copyTextElement = document.getElementById(copyTextElementId);
      
        outputElement.select();
        document.execCommand('copy');
      
        copyTextElement.innerText = 'Copied';
        setTimeout(function() {
          copyTextElement.innerText = '';
        }, 1500);
      }
      
      document.getElementById('btnCopy1').addEventListener('click', function() {
        copyText('outputText1', 'outputText1', 'copyText1');
      });
      
      document.getElementById('btnCopy2').addEventListener('click', function() {
        copyText('outputText2', 'outputText2', 'copyText2');
      });
      
  });
  