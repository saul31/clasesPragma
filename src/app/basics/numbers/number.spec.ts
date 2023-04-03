import { increment } from './number';

describe('Pruebas de numeros', () => {


  it('Debe de retornar el numero + 1 si el numero es menor a 100', () => {

    const number = 50;
    const resp = increment(number);
    expect(resp).toBe(number + 1);

  });
})