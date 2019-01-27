### API

#### Alert

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

**props**

| Name         | Type     | Default | Description                                                       |
| ------------ | -------- | ------- | ----------------------------------------------------------------- |
| children     | node     | null    | The content of the component                                      |
| isOpen       | boolean  | true    | open alert component                                              |
| applyEffects | function | noop    | Apply side effects after mounting and unmounting alert component. |
| dismissible  | boolean  | true    | alert dismissible                                                 |
| dismissAlert | function | noop    | call dismissAlert function if you want to dismiss alert from dom. |
