import { Player2 } from './player2';

describe('Jugador 2 emite', () => {
  let player: Player2;
  let newHp: number;

  beforeEach(() => {
    player = new Player2;
    newHp = 0;
  });

  it('Debe de emitir un evento cuando recibe daño mayor a 100', () => {
    player.hpChange.subscribe(hp => {
      newHp = hp;
    });
    player.pushDamage(1000);
    expect(newHp).toBe(0);
  });

  it('Debe de emitir un evento cuando recibe daño menor a 100', () => {
    player.hpChange.subscribe(hp => {
      newHp = hp;
    });
    player.pushDamage(99);
    expect(newHp).toBe(1);
  });

});