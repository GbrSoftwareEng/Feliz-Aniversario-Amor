# Feliz Aniversário 💜

Site de aniversário com carta em carrossel vertical estilo lyrics, partículas roxas brilhantes, flores caindo e música de fundo.

## Rodar localmente

```bash
bun install
bun run dev
```

## Hospedar no GitHub Pages

1. Crie um repositório no GitHub e envie esse código.
2. No GitHub, vá em **Settings → Pages** e em **Source** selecione **GitHub Actions**.
3. Faça push para a branch `main`. O workflow `.github/workflows/deploy.yml` faz o build e publica automaticamente.
4. O site ficará disponível em: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

O `base` do Vite é configurado automaticamente pelo workflow usando o nome do repositório.

## Trocar a música ou a imagem

- Música: substitua `public/music.mp3`
- Imagem de fundo: substitua `src/assets/background.png`
