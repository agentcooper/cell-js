import Protein from './protein';

class Ribosome {
  transcribe(dna, mRNA) {
    // first, RNA binds to promoter
    // https://en.wikipedia.org/wiki/Promoter_(genetics)
    const startIndex = this.findPromoter(dna, rna);

    let seenStopCodon = false;
    let index = startIndex;
    let codons = [];

    // then, rna reads codons - triplets of DNA letters
    while (!seenStopCodon) {
      const codon = readCodon(index);

      if (isStopCodon(codon)) {
        codons.push(codon);
      } else {
        seenStopCodon = true;
      }
    }

    const peptideChain = codons.map(this.getAminoAcid);

    const protein = new Protein(peptideChain);

    return protein;
  }

  findPromoter(dna, rna) {
    // how rna finds the promoter?
  }

  getAminoAcid(codon) {
    // https://en.wikipedia.org/wiki/DNA_codon_table
    const codonToAminoAcid = {
      AAA: 'TP',
      // ...
    };

    return codonToAminoAcid[codon];
  }
}

export default Ribosome;
