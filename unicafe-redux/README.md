# Osa 6
## Flux arkkitehtuuri ja redux

https://fullstackopen.com/osa6/flux_arkkitehtuuri_ja_redux

Redux-store sovelluksen voi välittää komponenteille React Redux-kirjaston tarjoamalla hooks-rajapinnalla:
```
npm install react-redux
```

React Redux ‑kirjaston tarjoama useDispatch-hook tarjoaa mille tahansa React-komponentille pääsyn tiedostossa main.jsx määritellyn Redux-storen dispatch-funktioon, jonka avulla komponentti pääsee tekemään muutoksia Redux-storen tilaan.

Storeen talletettuihin muistiinpanoihin komponentti pääsee käsiksi React Redux ‑kirjaston useSelector-hookin kautta