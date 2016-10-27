import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Hooks from '../src/Hooks';

describe('# Hooks', function () {
  it('should trigger pre/post hooks', function () {
    class Model {
      save(a) {
        console.log(a);
        return { success: true };
      }
    }

    const model = new Model();
    const modelHooks = new Hooks(model);


    modelHooks
      .pre('save', () => { console.log('antes de salvar doc #1') })
      .pre('save', () => { console.log('antes de salvar doc #2') })
      .post('save', () => { console.log('depois de salvar doc #1') })
      .post('save', () => { console.log('depois de salvar doc #2') });

    model.save('Salvo com sucesso');
  });

});
