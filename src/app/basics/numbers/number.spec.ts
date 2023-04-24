import { increment } from './number';

describe('Pruebas de numeros', () => {


  it('Debe de retornar el numero + 1 si el numero es menor a 100', () => {

    const number = 50;
    const resp = increment(number);
    expect(resp).toBe(number + 1);

  });

  it('Debe de retornar 100 si recibe un numero mayor a 100', () => {
    const number = 101;
    const resp = increment(number);

    expect(resp).toBe(100)

  });

})