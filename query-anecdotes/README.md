# [React Query useReducer ja context](https://fullstackopen.com/osa6/react_query_use_reducer_ja_context)


React Query ‑kirjaston avulla voidaan säilyttää ja hallinnoida dataa käyttämättä ollenkaan Reactin hookeja useState ja useEffect. React Query on siis kirjasto, joka ylläpitää frontendissä palvelimen tilaa, eli toimii ikäänkuin välimuistina sille, mitä palvelimelle on talletettu

```
npm install @tanstack/react-query
```

## Fullstackopen - osa 6 - React Query useReducer ja context - tehtävät 6.20 - 6.22

## useReducer

Vaikka sovellus siis käyttäisi React Queryä, tarvitaan siis yleensä jonkinlainen ratkaisu selaimen muun tilan (esimerkiksi lomakkeiden) hallintaan. Melko usein useState:n avulla muodostettu tila on riittävä ratkaisu. Reduxin käyttö on toki mahdollista mutta on olemassa myös muita vaihtoehtoja

### Fullstackopen - osa 6 - React Query useReducer ja context - tehtävät 6.23 - 6.24