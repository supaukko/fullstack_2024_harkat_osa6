import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import anecdoteService from '../services/anecdotes'

const KEY = 'anecdotes'

const useInvalidateAnecdotes = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: [KEY] })
}

/**
 * Datan hakeminen palvelimelta tapahtuu Axiosin get-metodilla.
 * Axiosin metodikutsu on kääritty useQuery-funktiolla muodostetuksi kyselyksi.
 * Funktiokutsun ensimmäisenä parametrina on merkkijono anecdotes, joka toimii
 * avaimena määriteltyyn kyselyyn.
 * 
 * Funktion useQuery paluuarvo on olio, joka kertoo kyselyn tilan
 */
const useAnecdotes = () => {
  return useQuery({
    queryKey: [KEY],
    queryFn: anecdoteService.getAll,
    retry: 1
  })
}

const useUpdateAnecdote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: anecdoteService.update,
    onSuccess: (data) => {
      const previousAnecdotes = queryClient.getQueryData({ queryKey: [KEY] });
      // console.log('useUpdateAnecdote', data, previousAnecdotes)
      if (previousAnecdotes) {
        queryClient.setQueryData(KEY, (old) => 
          old.map((item) => 
            item.id === data.id ? { ...item, ...data } : item
          )
        )
      }
      else {
        queryClient.invalidateQueries({ queryKey: [KEY] })
      }
    }
  })
}

const useCreateAnecdote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: anecdoteService.create,
    onSuccess: (data) => {
      const previousAnecdotes = queryClient.getQueryData(KEY);
      
      if (previousAnecdotes) {
        queryClient.setQueryData({ queryKey: [KEY] }, (old) => [...old, ...data])
      }
      else {
        queryClient.invalidateQueries({ queryKey: [KEY] })
      }
    }
  })
}

export { useAnecdotes, useUpdateAnecdote, useCreateAnecdote, useInvalidateAnecdotes }


