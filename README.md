# Rei das Portas
Landing page estática: HTML, CSS e JavaScript nativos, sem dependências de produção.

## Executar
Na pasta do repositório: `python3 -m http.server 8000 --bind 0.0.0.0`.

## Conteúdo
WhatsApp e mensagem em `config.js`. Imagens conceituais geradas por IA em `assets/`, sem representar catálogo ou trabalhos realizados. As versões WebP de 640 e 1280 pixels são carregadas por `srcset`; substitua ambas ao inserir fotos reais e atualize textos alternativos, categorias e legendas no HTML. Publique a pasta completa, incluindo os assets. Não há fontes, scripts ou imagens carregados de terceiros.

## Interações
Filtros por categoria, galeria modal com Escape, setas e gesto horizontal; menu móvel; revelação com IntersectionObserver e transição por rolagem com requestAnimationFrame. Movimento reduzido desativa parallax e animações. Conteúdo continua visível sem JavaScript, mas filtros e galeria precisam dele.

## Segurança
Versão anterior preservada no commit e455602 e na branch backup/landing-original. Nenhuma publicação efetuada.
