# ISYS\_ReactComponentizationDialogReactInstance interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

React 实例接口 用于接收扩展的 React 实例

## Signature

```typescript
interface ISYS_ReactComponentizationDialogReactInstance 
```

## Remarks

此接口定义了从扩展传递的 React 实例的方法。 由于扩展和 pro-api 使用不同的 React 实例，需要通过此接口传递 React 方法。

## Example


```typescript
const ReactInstance = {
  createContext: React.createContext,
  useContext: React.useContext,
  useRef: React.useRef,
  useEffect: React.useEffect,
  createElement: React.createElement,
};
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[createContext](./ISYS_ReactComponentizationDialogReactInstance.md)


</td><td>


</td><td>

&lt;T&gt;(defaultValue: T) =&gt; React.Context&lt;T&gt;


</td><td>

**_(ALPHA)_** 创建 React Context


</td></tr>
<tr><td>

[createElement](./ISYS_ReactComponentizationDialogReactInstance.md)


</td><td>


</td><td>

&lt;P extends Record&lt;string, unknown&gt;&gt;(type: React.ElementType&lt;P&gt;, props?: P \| null, ...children: React.ReactNode\[\]) =&gt; React.ReactElement&lt;P&gt;


</td><td>

**_(ALPHA)_** 创建并返回指定类型的新 React 元素


</td></tr>
<tr><td>

[useContext](./ISYS_ReactComponentizationDialogReactInstance.md)


</td><td>


</td><td>

&lt;T&gt;(context: React.Context&lt;T&gt;) =&gt; T


</td><td>

**_(ALPHA)_** 读取和订阅 Context 的值


</td></tr>
<tr><td>

[useEffect](./ISYS_ReactComponentizationDialogReactInstance.md)


</td><td>


</td><td>

(effect: () =&gt; undefined \| (() =&gt; undefined), deps?: React.DependencyList) =&gt; void


</td><td>

**_(ALPHA)_** 执行副作用操作


</td></tr>
<tr><td>

[useRef](./ISYS_ReactComponentizationDialogReactInstance.md)


</td><td>


</td><td>

&lt;T&gt;(initialValue: T) =&gt; React.MutableRefObject&lt;T&gt;


</td><td>

**_(ALPHA)_** 创建一个可变的 ref 对象


</td></tr>
</tbody></table>

---

## 属性详情

### createcontext

# ISYS\_ReactComponentizationDialogReactInstance.createContext property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建 React Context

## Signature

```typescript
createContext: <T>(defaultValue: T) => React.Context<T>;
```

### createelement

# ISYS\_ReactComponentizationDialogReactInstance.createElement property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建并返回指定类型的新 React 元素

## Signature

```typescript
createElement: <P extends Record<string, unknown>>(type: React.ElementType<P>, props?: P | null, ...children: React.ReactNode[]) => React.ReactElement<P>;
```

### usecontext

# ISYS\_ReactComponentizationDialogReactInstance.useContext property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

读取和订阅 Context 的值

## Signature

```typescript
useContext: <T>(context: React.Context<T>) => T;
```

### useeffect

# ISYS\_ReactComponentizationDialogReactInstance.useEffect property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

执行副作用操作

## Signature

```typescript
useEffect: (effect: () => undefined | (() => undefined), deps?: React.DependencyList) => void;
```

### useref

# ISYS\_ReactComponentizationDialogReactInstance.useRef property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建一个可变的 ref 对象

## Signature

```typescript
useRef: <T>(initialValue: T) => React.MutableRefObject<T>;
```
