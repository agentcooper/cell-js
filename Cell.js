import Nucleus from './Nucleus';

import Ribosome from './Ribosome';
import Lysosome from './Lysosome';
import Mitochondria from './Mitochondria';
import GolgiApparatus from './GolgiApparatus';

import Vacuole from './Vacuole';
import Centrosome from './Centrosome';

class ProkaryoteCell {
  // ...
}

// There are many other types of cell.
// For instance, there are approximately 210 distinct cell types in the adult human body.
// https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body

class EukaryoteCell {
  constructor(dna) {
    // TODO: show that there are huge numbers of
    // ribosomes, mitochondria, etc. inside the cell

    this.nucleus = new Nucleus(dna);

    // http://book.bionumbers.org/how-many-ribosomes-are-in-a-cell/
    this.ribosome = new Ribosome();

    this.endoplasmicReticulum = {
      rough: {}, // ribosomes
      smooth: {}, // manufactures lipids
    };

    this.membrane = new Set([
      new Lysosome(),
      new Mitochondria(),
      new GolgiApparatus(),
      new Vacuole(),
      new Centrosome(),
    ]);

    this.startCellCycle();
  }

  startCellCycle() {
    // https://en.wikipedia.org/wiki/Cell_cycle
  }

  // https://en.wikipedia.org/wiki/Transcription_(biology)
  translate() {
    const mRNA = this.nucleus.dna.map(letter => {
      // thymin changes to uracil
      if (letter === 'T') {
        return 'U';
      }
      return letter;
    });

    return mRNA;
  }

  divide() {
    // https://en.wikipedia.org/wiki/Cytokinesis
    // cells divide to create new cells
  }
}
