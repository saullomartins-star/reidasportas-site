# Rei Das Portas

Landing page responsiva em HTML, CSS e JavaScript, sem dependências ou etapa de build.

## Executar localmente

Na pasta do repositório:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Abra a porta 8000 no navegador. Para publicar, sirva os arquivos desta pasta em qualquer hospedagem estática.

## Configurar o WhatsApp

Edite `whatsappNumber` em `config.js` com o número real da loja, incluindo código do país e DDD, apenas dígitos. A mensagem inicial também pode ser personalizada nesse arquivo. Sem um número válido, o botão permanece desativado para evitar encaminhar clientes para um contato incorreto.

## Imagem

`assets/portas.png` é uma imagem ilustrativa gerada por IA, sem representar um produto específico da loja. A mesma imagem está incorporada em Base64 no `src` da imagem principal em `index.html`, permitindo que prévias que exibem apenas o HTML também carreguem a foto. O arquivo original é mantido em `assets/portas.png`. Ao substituir a imagem, atualize também esse `src` e o texto alternativo em `index.html`.
