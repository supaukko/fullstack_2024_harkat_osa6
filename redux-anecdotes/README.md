# Fullstackopen osa 6

## Flux-arkkitehtuuri ja Redux
https://fullstackopen.com/osa6/flux_arkkitehtuuri_ja_redux


Redux-store sovelluksen voi välittää komponenteille React Redux-kirjaston tarjoamalla hooks-rajapinnalla:
```
npm install react-redux
```

React Redux ‑kirjaston tarjoama useDispatch-hook tarjoaa mille tahansa React-komponentille pääsyn tiedostossa main.jsx määritellyn Redux-storen dispatch-funktioon, jonka avulla komponentti pääsee tekemään muutoksia Redux-storen tilaan.

Storeen talletettuihin muistiinpanoihin komponentti pääsee käsiksi React Redux ‑kirjaston useSelector-hookin kautta

### Tehtävät 6.3 - 6.8
https://fullstackopen.com/osa6/flux_arkkitehtuuri_ja_redux#tehtavat-6-3-6-8


### Monta reduseria - tehtävät 6.9

https://fullstackopen.com/osa6/monta_reduseria


### Redux Toolkit
Toolkitillä vältetään turha toisto. Esim. configureStore-funktion configureStore funktiolla päästään eroon combineReducers funktiosta. configureStore-funktion käytöstä on myös monia muita hyötyjä, kuten kehitystyökalujen ja usein käytettyjen kirjastojen vaivaton käyttöönotto ilman erillistä konfiguraatiota. 

Asennetaan Redux toolkit
```
npm install @reduxjs/toolkit
```

#### Testaus

https://fullstackopen.com/osa5/react_sovellusten_testaaminen

```
npm install --save-dev vitest jsdom
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Tehdään projektin juureen testSetup.js tiedosto
```
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})
```

Päivitetään vite.config.js tiedosto. `globals: true` määrittelyn avulla testeissä ei 
tarvitse importoida erikseen describe, test etc. kirjastoja

```
export default defineConfig({
  // ...
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js', 
  }
})
```

## Redux-sovelluksen kommunikointi palvelimen kanssa

Asennetaan JSOn server
```
npm install json-server --save-dev
npm install axios
```

Package.json skripteihin lisää `"server": "json-server -p3001 --watch db.json"` 

### Tehtävät 6.14.-6.15

Redux-storen alustus Redux Thunk ‑kirjaston avulla voi lisätä asynkronisiä funktiota actioniin, jotka ensin odottavat jonkin asynkronisen toimenpiteen valmistumista ja vasta sen jälkeen dispatchaavat varsinaisen actionin.

 Huom. Redux Thunk-kirjaston käyttö ei vaadi ylimääräistä konfiguraatiota eikä asennusta, kun Redux-store on luotu Redux Toolkitin configureStore-funktiolla