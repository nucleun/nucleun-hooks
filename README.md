# nucleun-hooksjs
*Generic Hooks and Triggers*

Runs a stack of new functions before or after (pre / post) of the original function

## Install
```
npm install nucleun-hooksjs
```

## See live example:
<p data-height="263" data-theme-id="0" data-slug-hash="ZBzKBy" data-default-tab="result" data-user="joaoneto" data-embed-version="2" data-pen-title="HooksJS" class="codepen">See the Pen <a href="http://codepen.io/joaoneto/pen/ZBzKBy/">HooksJS</a> by João Neto (<a href="http://codepen.io/joaoneto">@joaoneto</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Examples

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
