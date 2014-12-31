## rename keys

```js
import rename from 'rename-keys';
var obj = { spam: 'good' };
console.log( rename(obj, { spam: 'ham' }) ); // { ham: 'good' }
```
