const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function(param) {
    if (typeof param !== "string") {
      return false;
    } else {
      return !isNaN(param);
    }
  },
  addString: function(param) {
    if (typeof param !== "string") {
      return false;
    } else {
      if (isNaN(param)) {
        this.NaNyStrings.push(param);
      } else {
        this.numberyStrings.push(param);
      }
      return true;
    }
  },
  allStrings: function() {
    return [...this.numberyStrings, ...this.NaNyStrings];
  },
  evenStrings: function() {
    return this.numberyStrings.filter(x => Number(x) % 2 === 0);
  },
  oddStrings: function() {
    return this.numberyStrings.filter(x => Number(x) % 2 !== 0);
  },
  negativeStrings: function() {
    return this.numberyStrings.filter(x => Number(x) < 0);
  },
  positiveStrings: function() {
    return this.numberyStrings.filter(x => Number(x) > 0 || x === "");
  },
  zeroStrings: function() {
    return this.numberyStrings.filter(x => Number(x) === 0 || x === "");
  },
  numberyAsNumbers: function() {
    return this.numberyStrings.map(x => Number(x));
  },
  NaNyAsNumbers: function() {
    return this.NaNyStrings.map(x => Number(x));
  },
  sumOfNumbery: function() {
    return this.numberyStrings.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
  },
  sumOfNaNy: function() {
    return this.NaNyStrings.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
  }
};
