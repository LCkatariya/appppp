import {http} from 'msw'


export const handlers = [
  http.post('https://jsonplaceholder.typicode.com/posts', ({ request }) => {
    console.log('inside mocks', request)
    return new Response(
      JSON.stringify({ name: 'lfsjdflafjalsdkl' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  })
]