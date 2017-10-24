import { expect } from 'chai'
import { isValidType } from '../src/type'

describe('type', () => {
  describe('isValidType', () => {
    it('will return the given type if it is valid', done => {
      const validType = 'string'
      const checkTypeIsValid = isValidType({ type: validType })

      expect(checkTypeIsValid).to.equal('string')

      done()
    })
  })
  describe('typeObject', () => {
    // ...
  })
  describe('type', () => {
    // ...
  })
})