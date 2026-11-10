# Слоўка — беларускі вордл

**Беларуская.** «Слоўка» — гэта гульня, у якой трэба адгадаць беларускае слова за шэсць спроб. Пасля кожнай спробы літары афарбоўваюцца: зялёная стаіць на сваім месцы, жоўтая ёсць у слове, але ў іншым месцы, а шэрай у слове няма. Можна выбраць даўжыню слова ад 4 да 7 літар і адзін з двух рэжымаў: «Слова дня», агульнае для ўсіх, ці «Бясконца». Пасля гульні паказваецца пераклад слова на рускую мову, ёсць статыстыка і кнопка, каб падзяліцца вынікам. Гульню можна ўсталяваць на тэлефон, і яна працуе без інтэрнэту.

Мэта праекта — папулярызаваць беларускую мову праз простую і цікавую гульню.

**English.** Slouka is a Wordle-style game in Belarusian: guess the word in six tries. After each guess the letters change color: green means the letter is in the right spot, yellow means it is in the word but in another spot, and grey means it is not in the word. Choose a word length from 4 to 7 letters and one of two modes, the daily word (the same for everyone) or endless play. After each game you see the Russian translation of the word, your statistics, and a button to share your result. The game can be installed on a phone and works offline.

The project aims to make the Belarusian language more popular through a simple, fun game.

## Як гуляць / How to play

Адкрыйце сайт і пачынайце ўводзіць літары. На тэлефоне гульню можна дадаць на галоўны экран (Chrome: ⋮ → «Усталяваць праграму»; Safari: «Падзяліцца» → «На экран Дамоў»).

Open the site and start typing. On a phone, add it to your home screen (Chrome: ⋮ → "Install app"; Safari: Share → "Add to Home Screen").

## Слоўнік / Dictionary

Праверка слоў выкарыстоўвае беларускі слоўнік правапісу hunspell-be (© Мікалай Удодаў, 2010–2019), ліцэнзія CC BY-SA 3.0. Файл `slounik.txt` створаны з гэтага слоўніка і распаўсюджваецца на тых жа ўмовах.

Word checking uses the Belarusian hunspell spelling dictionary hunspell-be (© Mikalai Udodau, 2010–2019), licensed under CC BY-SA 3.0. The file `slounik.txt` is derived from it and is shared under the same license.

## Файлы / Files

- `index.html` — гульня і слоўнік / the game and its word list
- `slounik.txt` — спіс формаў слоў для праверкі / word forms used to check guesses
- `manifest.json`, `sw.js`, `icon-*.png` — усталёўка на тэлефон і праца без інтэрнэту / installation on a phone and offline mode
