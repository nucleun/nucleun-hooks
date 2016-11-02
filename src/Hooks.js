export default class Hooks {
  constructor(subject) {
    subject.$pre = {};
    subject.$post = {};
    this.subject = subject;
    // this.subject = Object.getOwnPropertyNames(subject)
    //   .filter((a) => /^(?!data)/.test(a))
    //   .reduce((a, b) => Object.assign(a, { [b]: subject[b] }), subject);
  }

  pre(type, callback) {
    if (!this.subject.$pre[type]) {
      this.subject.$pre[type] = [];
      this._wrap(this.subject[type], type);
    }

    this.subject.$pre[type].push(callback);

    return this;
  }

  post(type, callback) {
    if (!this.subject.$post[type]) {
      this.subject.$post[type] = [];
      this._wrap(this.subject[type], type);
    }

    this.subject.$post[type].push(callback);

    return this;
  }

  _trigger(type, action, args) {
    (this.subject[type][action] || []).map((hook) => {
      hook.apply(this.subject[type][action], args);
    });

    return Promise.resolve();
  }

  _wrap(fn, type) {
    const self = this;

    return this.subject[type] = function () {
      if (self.subject[type].called) {
        return false;
      }

      self.subject[type].called = true;

      return self._trigger('$pre', type, arguments)
        .then(() => fn.apply(fn, arguments))
        .then(() => self._trigger('$post', type, arguments))
        .then(() => self.subject[type].called = false);

    };

  }
}
