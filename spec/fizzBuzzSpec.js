describe('FizzBuzz', () => {

  var fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', () => {
    it('fizzes for 3', () => {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', () => {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });
});