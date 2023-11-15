// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Generates Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const pAequorFactory = (specimenNum,dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      num = getRandomInt(15);
      replacement = getRandomInt(3);
      basesNoA = ['T','C','G']
      basesNoT = ['A','C','G']
      basesNoC = ['T','A','G']
      basesNoG = ['A','T','C']
      if(dna[num] === 'A') {
        this.dna[num] = basesNoA[replacement]
      } else if (dna[num] === 'T') {
        this.dna[num] = basesNoT[replacement]
      } else if (dna[num] === 'C') {
        this.dna[num] = basesNoC[replacement]
      } else if (dna[num] === 'G') {
        this.dna[num] = basesNoG[replacement]
      }
    },
    compareDNA(pA) {
      count = 0;
      for(let i = 0; i < 15; i++) {
        if(this.dna[i] === pA.dna[i]) {
          count++;
        }
      }
      percent = count/15 * 100
      console.log("specimen #1 and specimen #2 have "+percent+"% DNA in common");
    },
    willLikelySurvive() {
      count = 0;
      for(let i = 0; i < 15; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++;
        }
      }
      if(count >= 9) {
        return true;
      }
      return false;
    }
  }
};

const survivors = []

while(survivors.length < 30) {
  num = survivors.length + 1;
  strand = pAequorFactory(num,mockUpStrand()) 
  if(strand.willLikelySurvive() === true) {
    survivors.push(strand)
  }
}
