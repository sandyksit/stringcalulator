class StringCalculator {
    add(input) {
      if (input === "") return 0;
  
      let delimiter = /,|\n/;
      if (input.startsWith("//")) {
          const delimiterEnd = input.indexOf("\n");
          delimiter = new RegExp(input.substring(2, delimiterEnd));
          input = input.substring(delimiterEnd + 1);
      }
  
      const nums = input.split(delimiter).map(Number);
      const negatives = nums.filter(n => n < 0);
      
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
      }
  
      return nums.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;