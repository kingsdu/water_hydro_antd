import { get } from './get'

export function getNewsData() {
    const result = get('/api/homeNews')
    return result
}

