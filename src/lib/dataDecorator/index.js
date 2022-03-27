import { v4 } from 'uuid';

export default function dataDecorator(arr) {
  return arr.map( item => {
    return {
      id: v4(),
      name: item,
    }
  })
}