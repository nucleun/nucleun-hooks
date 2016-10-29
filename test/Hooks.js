import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

import Hooks from '../src/Hooks';

describe('# Hooks', function () {
  it('should trigger pre/post hooks', function () {
    class Model {
      save() {
        return { success: true };
      }
    }

    const model = new Model();
    const modelHooks = new Hooks(model);

    const preSave1 = sinon.spy();
    const preSave2 = sinon.spy();
    modelHooks
      .pre('save', preSave1)
      .pre('save', preSave2);

    const postSave1 = sinon.spy();
    const postSave2 = sinon.spy();
    modelHooks
      .post('save', postSave1)
      .post('save', postSave2);

    model.save('Salvo com sucesso');

    preSave1.should.have.been.calledOnce;
    preSave2.should.have.been.calledOnce;

    postSave1.should.have.been.calledOnce;
    postSave2.should.have.been.calledOnce;
  });

});
