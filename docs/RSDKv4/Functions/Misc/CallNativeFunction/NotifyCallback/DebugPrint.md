# NOTIFY_DEBUGPRINT

## Description
Has no effect in-game, but would have likely printed the given values to the console in debug builds of Sonic Origins.

## Parameters
- `value1`, `value2`, `value3`
The values to (supposedly) print.

## Return Value
None.

## Syntax
```
CallNativeFunction2(NotifyCallback, NOTIFY_DEBUGPRINT, int value1)
```
```
CallNativeFunction4(NotifyCallback, NOTIFY_DEBUGPRINT, int value1, int value2, int value3)
```

## Examples
```
CallNativeFunction2(NotifyCallback, NOTIFY_DEBUGPRINT, object.state)
```
```
CallNativeFunction4(NotifyCallback, NOTIFY_DEBUGPRINT, 100, object.propertyValue, object.timer)
```