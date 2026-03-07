import { test, describe, vi, expect } from 'vitest'
import { testFn } from './utils'
import { request } from './utils'
import axios from 'axios'
vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>
describe('function', () => {
  test('create a mock function', () => {
    const callback = vi.fn()
    testFn(11, callback)
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(11)
  })
  test('spy on method', () => {
    const obj = {
      getName: () => 1,
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
  })
  test('create a mock function', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 'mock data' }))
    mockedAxios.get.mockResolvedValue({ data: 'mock data' })
    const result = await request()
    expect(result).toBe('mock data')
  })
})
