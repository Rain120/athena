# 插件机制

插件作为 `Slate` 一等公民，具有能够完全修改编辑器行为的能力。

这里我们通过官方提供的 [slate-history](../libraries/slate-history) 来介绍 `slate` 的插件原理。

## 插件原理

### 实现插件

```ts
/**
 * withHistory 插件使用 撤消(redo) 和 重做(undo) 堆栈来跟踪对 Slate编辑器 执行操作时的操作历史记录。
 */
export const withHistory = <T extends Editor>(editor: T) => {
    const e = editor as T & HistoryEditor;
    const {apply} = e;
    // ...

    e.redo = () => {
        // ...
    };

    e.undo = () => {
        // ...
    };

    e.apply = (op: Operation) => {
        // ...
        apply(op);
    };

    return e;
};
```

### 使用插件

```ts
import React, {useState, useCallback, useMemo} from 'react';
import {Slate, Editable, withReact} from 'slate-react';
import {Editor, Range, Point, Node, createEditor} from 'slate';
import {withHistory} from 'slate-history';

const TablesExample = () => {
    const [value, setValue] = useState<Node[]>(initialValue);
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);
    const editor = useMemo(
		() => withTables(
			withHistory(
				withReact(createEditor())
			)
		),
		[]
	);
    return (
		<Slate
			editor={editor}
			value={value}
			onChange={value => setValue(value)}
		>
			<Editable
				renderElement={renderElement}
				renderLeaf={renderLeaf}
			/>
        </Slate>
    );
};
```

`Slate` 插件是一个返回 `editor` 实例的函数，在这个插件函数中我们可以调用编辑器自身的能力，这样就能完全控制编辑器行为，所以我们可以使用插件来定制我们想要的编辑器。

## 人间惨案

由于目前我们使用的版本还是`slate@0.47.x`, 它的插件原理是基于 `middleware` 的设计，绑定在`editor`上。

```js
function registerPlugin(editor, plugin) {
    if (Array.isArray(plugin)) {
        plugin.forEach(p => registerPlugin(editor, p));
        return;
    }

    if (plugin == null) {
        return;
    }

    const {commands, queries, schema, ...rest} = plugin;

    if (commands) {
        const commandsPlugin = CommandsPlugin(commands);
        registerPlugin(editor, commandsPlugin);
    }

    if (queries) {
        const queriesPlugin = QueriesPlugin(queries);
        registerPlugin(editor, queriesPlugin);
    }

    if (schema) {
        const schemaPlugin = SchemaPlugin(schema);
        registerPlugin(editor, schemaPlugin);
    }

    for (const key in rest) {
        const fn = rest[key];
        const middleware = (editor.middleware[key] = editor.middleware[key] || []);
        middleware.push(fn);
    }
}
class Editor {
    constructor(attrs = {}, options = {}) {
        const {controller = this, construct = true} = options;
        const {plugins = []} = attrs;

        this.middleware = {};
        // ...

        this.registerPlugins(plugins);

        // ...
    }

    registerPlugins(plugins) {
        const core = CorePlugin({plugins});
        registerPlugin(this, core);
    }
    run(key, ...args) {
        const {controller, middleware} = this;
        const fns = middleware[key] || [];
        let i = 0;

        function next(...overrides) {
            const fn = fns[i++];
            if (!fn) {
                return;
            }

            if (overrides.length) {
                args = overrides;
            }

            const ret = fn(...args, controller, next);
            return ret;
        }
        // debug warning
        return next();
    }
}
```

### 实现

```js
function MyPlugin(options) {
    return {
        onKeyDown(t) {},
        onClick() {},
        renderBlock() {},
        renderInline() {},
        commands: {},
        queries: {},
        schema: {},
    };
}
```

### 使用

```jsx
import {Value} from 'slate';
import {Editor} from 'slate-react';
import * as React from 'react';

const initialValue = {
    object: 'value',
    document: {
        object: 'document',
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        text:
                            'Slate editors save all changes to an internal "history" automatically, so you don\'t need to implement undo/redo yourself. And the editor automatically binds to the browser\'s default undo/redo keyboard shortcuts.',
                    },
                ],
            },
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        text:
                            'Try it out for yourself! Make any changes you\'d like then press "cmd+z".',
                    },
                ],
            },
        ],
    },
};
class History extends React.Component {
    state = {
        value: Value.fromJSON(initialValue),
    };

    ref = editor => {
        this.editor = editor;
    };

    render() {
        const {value} = this.state;
        const {data} = value;
        const plugins = [MyPlugin];
        return (
            <div>
                <Editor
                    placeholder='Enter some text...'
                    ref={this.ref}
                    plugins={plugins}
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
    onChange = change => {
        this.setState({value: change.value});
    };
}
```

## 如何注册自定义插件

### lastest

```ts
export const withHistory = <T extends Editor>(editor: T) => {
    const e = editor as T & HistoryEditor;
    const {apply} = e;
    e.apply = (op: Operation) => {
        // ...
        apply(op);
    };
    return e;
};
```

### 0.47.x

```jsx
<Editor
    plugins={[
        {
            custom: (editor, next) => {
                console.log(1);
                next();
            }
        },
        {
            custom: (editor, next) => {
                console.log(2);
            }
        },
        {
            custom: (editor, next) => {
                console.log(3);
            }
        }
    ]}
/>;
// 使用
editor.run('custom'); // 输出 1 2

```

