const {once} = require('events');
const {createReadStream} = require('fs');
const {createInterface} = require('readline');
(async function processLineByLine(chromosome = 'chr1', position = '17655') {
  try {
    const rl = createInterface({
      input: createReadStream('./input_tiny (4).vcf'),
      crlfDelay: Infinity
    });
    rl.on('line', (line) => {
      if (line.includes(chromosome + '\t') && line.includes(position + '\t')) {
        console.log(line.split('\t')[3])
      }
    });
    await once(rl, 'close');
    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();