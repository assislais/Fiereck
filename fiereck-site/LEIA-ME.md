# Publicação
1. Troque `https://www.SEUDOMINIO.com.br` pelo seu domínio real: `grep -rl SEUDOMINIO site | xargs sed -i "s#https://www.SEUDOMINIO.com.br#https://SEU-DOMINIO#g"`.
2. Envie a pasta para um host estático (Netlify, Cloudflare Pages, Vercel) na raiz do domínio.
3. Dados e imagens do chat: edite `assets/site.js` (CONFIG e IMAGES).
4. Envie `sitemap.xml` no Google Search Console.
