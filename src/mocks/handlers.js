import { http, HttpResponse } from 'msw'

const series = [
  { id: 1, title: "Stranger Things", creator: "The Duffer Brothers", rating: 8.7, dates: "2016-", image: "https://example.com/stranger.jpg", channel: "Netflix" },
  { id: 2, title: "Breaking Bad", creator: "Vince Gilligan", rating: 9.5, dates: "2008-2013", image: "https://example.com/breaking.jpg", channel: "AMC" },
  { id: 3, title: "The Office", creator: "Greg Daniels", rating: 8.9, dates: "2005-2013", image: "https://example.com/office.jpg", channel: "NBC" },
  { id: 4, title: "Game of Thrones", creator: "David Benioff, D.B. Weiss", rating: 9.2, dates: "2011-2019", image: "https://example.com/got.jpg", channel: "HBO" },
  { id: 5, title: "The Crown", creator: "Peter Morgan", rating: 8.7, dates: "2016-", image: "https://example.com/crown.jpg", channel: "Netflix" },
  { id: 6, title: "The Mandalorian", creator: "Jon Favreau", rating: 8.7, dates: "2019-", image: "https://example.com/mando.jpg", channel: "Disney+" },
  { id: 7, title: "The Boys", creator: "Eric Kripke", rating: 8.7, dates: "2019-", image: "https://example.com/boys.jpg", channel: "Prime Video" },
  { id: 8, title: "The Walking Dead", creator: "Frank Darabont, Angela Kang", rating: 8.1, dates: "2010-2022", image: "https://example.com/twd.jpg", channel: "AMC" },
  { id: 9, title: "Friends", creator: "David Crane", rating: 8.9, dates: "1994-2004", image: "https://example.com/friends.jpg", channel: "NBC" },
  { id: 10, title: "The Simpsons", creator: "Matt Groening", rating: 8.7, dates: "1989-", image: "https://example.com/simpsons.jpg", channel: "Fox" },
  { id: 11, title: "Sherlock", creator: "Mark Gatiss, Steven Moffat", rating: 9.1, dates: "2010-2022", image: "https://example.com/sherlock.jpg", channel: "BBC" },
  { id: 12, title: "Dark", creator: "Baran bo Odar", rating: 8.8, dates: "2017-2020", image: "https://example.com/dark.jpg", channel: "Netflix" },
  { id: 13, title: "Chernobyl", creator: "Craig Mazin", rating: 9.4, dates: "2019", image: "https://example.com/chernobyl.jpg", channel: "HBO" },
  { id: 14, title: "Black Mirror", creator: "Charlie Brooker", rating: 8.8, dates: "2011-", image: "https://example.com/blackmirror.jpg", channel: "Netflix" },
  { id: 15, title: "Rick and Morty", creator: "Dan Harmon, Justin Roiland", rating: 9.1, dates: "2013-", image: "https://example.com/rickandmorty.jpg", channel: "Adult Swim" }
]

export const handlers = [
  http.get('https://peticiones.online/api/series', () => {
    return HttpResponse.json(series)
  }),
  http.post('https://peticiones.online/api/series', () => {
    return HttpResponse.json({
      error: false
    })
  })
]