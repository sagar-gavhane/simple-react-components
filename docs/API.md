### API

#### Alert

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

**props**

| Name          | Type        | Default | Description                                                       |
| ------------- | ----------- | ------- | ----------------------------------------------------------------- |
| children      | render prop | null    | The content of the component                                      |
| isOpen        | boolean     | true    | Open alert component                                              |
| applyEffects  | function    | noop    | Apply side effects after mounting and unmounting alert component. |
| isDismissible | boolean     | true    | Alert dismissible                                                 |
| dismissAlert  | function    | noop    | Call dismissAlert function if you want to dismiss alert from dom. |
