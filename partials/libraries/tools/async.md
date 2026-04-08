如果你不熟悉 JavaScript 中的异步函数，请查阅 `[type]Promise` 类以及 `[func]async` 和 `[func]await` 关键字。

使用异步函数最简单的方式是将所有代码包裹在一个匿名异步函数中，然后使用 `[func]await` 等待函数执行：

```ts
const iconSet = await importDirectory('files/svg', {
    prefix: 'test',
});
```

要捕获错误，请使用 `[func]try` 和 `[func]catch`：

```ts
let iconSet: IconSet;
try {
    iconSet = await importDirectory('files/svg', {
        prefix: 'test',
    });
} catch (err) {
    console.error(`Failed to import directory:`, err);
    return;
}
```

可以查阅关于 `[func]async` 和 `[func]await` 的各种教程。YouTube 上有许多免费且优质的教程。
