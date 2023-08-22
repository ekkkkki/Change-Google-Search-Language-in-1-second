document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeLanguage').addEventListener('click', function() {
      var language = document.getElementById('languageSelect').value;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentUrl = tabs[0].url;
        var messageElement = document.getElementById('message');
  
        if (currentUrl.includes('google.')) {
          var langParam = '&lr=lang_' + language;
          var newUrl;
  
          if (currentUrl.includes('&lr=lang_')) {
            newUrl = currentUrl.replace(/(\&lr=lang_)[^&]*/i, langParam);
          } else {
            newUrl = currentUrl + langParam;
          }
  
          chrome.tabs.update(tabs[0].id, {url: newUrl});
          messageElement.textContent = 'Successfully changed!';
        } else {
          messageElement.textContent = 'Only aavailable on a Google search page!';
        }
      });
    });
  
    // Populate the select with various language options
    var languages = {
      "en": "English",
      "zh-CN": "中文 (简体)",
      "zh-TW": "中文 (繁体)",
      "ja": "日本語",
      "ko": "한국어",
      "fr": "Français",
      "de": "Deutsch",
      "es": "Español",
      "it": "Italiano",
      "nl": "Nederlands",
      "pt": "Português",
      "pt-BR": "Português (Brasil)",
      "ar": "العربية",
      "tr": "Türkçe",
      "ru": "Русский",
      "sv": "Svenska",
      "pl": "Polski",
      "da": "Dansk",
      "fi": "Suomi",
      "hu": "Magyar",
      "he": "עברית",
      "id": "Bahasa Indonesia",
      "ms": "Bahasa Melayu",
      "no": "Norsk",
      "th": "ไทย",
      "vi": "Tiếng Việt",
      "el": "Ελληνικά",
      "cs": "Čeština",
      "ro": "Română",
      "uk": "Українська",
      "hr": "Hrvatski",
      "sr": "Српски",
      "bg": "Български",
      "hi": "हिन्दी"
    };
  
    var select = document.getElementById('languageSelect');
    for (var code in languages) {
      var option = document.createElement('option');
      option.value = code;
      option.textContent = languages[code];
      select.appendChild(option);
    }
  });
  