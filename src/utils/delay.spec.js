import test from 'ava'

import delay from './delay'

test('delay test', t => {
  delay(1000).then(e => t.pass())
})
