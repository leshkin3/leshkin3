# Деплой на Cloudflare Pages

Эта папка содержит готовый статический сайт для загрузки на Cloudflare Pages.

## Как загрузить

1. Зайдите на https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Upload assets**.
2. Дайте проекту имя (например, `peak-edge-appliance-repair`).
3. Загрузите содержимое этой папки целиком (файлы `index.html`, `styles.css`, `script.js` и папку `images`), сохраняя структуру.
4. Нажмите **Deploy site** — Cloudflare выдаст вам публичную ссылку вида `https://<project>.pages.dev`.

## Содержимое
- `index.html` — главная страница
- `styles.css` — стили
- `script.js` — скрипты (аккордеоны услуг/FAQ, мобильное меню, формы обратной связи)
- `images/` — фотографии реальных выполненных работ
