import ngModuleName from './index';


describe('azEval', function() {

  beforeEach(window.module(ngModuleName));

  let azEval;

  const item = {
    beautifully: {
      simple: {
        expression: {
          evaluation: '|-o-| (-o-) |-o-|'
        }
      }
    }
  };

  beforeEach(inject((_azEval_) => {
    /* eslint no-console:0 */
    azEval = _azEval_;
  }));


  it(`should return the correct value when passed a string as the expression`, () => {
    const expression = 'beautifully.simple.expression.evaluation';
    const returnValue = azEval(expression, item);
    expect(returnValue).to.equal('|-o-| (-o-) |-o-|');

  });

  it(`should return the correct value when passed a function as the expression`, () => {
    function expression(myItem) {
      return myItem.beautifully.simple.expression.evaluation;
    }
    expect(azEval(expression, item)).to.equal('|-o-| (-o-) |-o-|');
  });

  it(`should throw an error when a number is sent to the function`, () => {
    expect(() => azEval(5, item)).to.throw('azEval only accepts functions and expression strings');
  });
});

