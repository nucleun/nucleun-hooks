# hooksjs
*Generic Hooks and Triggers*

Runs a stack of new functions before or after (pre / post) of the original function

Example


### Write some code
```javascript
class Model {
  save() {
    return { success: true };
  }
}

const model = new Model();
```

### Wrap it
```javascript
const modelHooks = new Hooks(model);
```

### Add some hooks pre / post
```javascript
modelHooks
  .pre('save', preSave1)
  .pre('save', preSave2);

modelHooks
  .post('save', postSave1)
  .post('save', postSave2);
```

### Run it, the pre and post stack makes magic
```javascript
model.save();

```
