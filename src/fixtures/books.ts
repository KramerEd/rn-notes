import { Book } from '@/types/modelsTypes'
import { LoremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const DATA: Array<Book> = []
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    min: 4,
    max: 16
  }
})

const capitalizeFirstLetter = ([first, ...rest]: string) =>
  first.toLocaleUpperCase() + rest.join('')

for (let i = 0; i < 100; i++) {
  DATA.push({
    id: shortid.generate(),
    name: capitalizeFirstLetter(
      lorem.generateSentences(Math.round(Math.random() * 4))
    )
  })
}
export default DATA
