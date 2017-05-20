import { hydrogeneBonds } from './physics';

class Protein {
  // https://simple.wikipedia.org/wiki/Protein_structure

  // peptide chain is a chain of amino acides
  constructor(peptideChain) {
    this.peptideChain = peptideChain;
    this.shape = null; // not folded yet

    this.fold();
  }

  fold() {
    // https://simple.wikipedia.org/wiki/Anfinsen%27s_dogma
    this.shape = hydrogeneBonds(this.peptideChain);
  }
}

export default Protein;
