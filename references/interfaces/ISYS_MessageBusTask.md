# ISYS\_MessageBusTask interface

消息总线任务

## 签名

```typescript
interface ISYS_MessageBusTask 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[cancel](./ISYS_MessageBusTask.md)


</td><td>


</td><td>

() =&gt; void


</td><td>

调用以取消任务


</td></tr>
<tr><td>

[execute](./ISYS_MessageBusTask.md)


</td><td>


</td><td>

(message: any) =&gt; Promise&lt;void&gt;


</td><td>

任务处理


</td></tr>
<tr><td>

[running](./ISYS_MessageBusTask.md)


</td><td>


</td><td>

() =&gt; boolean


</td><td>

检查运行状态


</td></tr>
</tbody></table>

---

## 属性详情

### cancel

# ISYS\_MessageBusTask.cancel property

调用以取消任务

## 签名

```typescript
cancel: () => void;
```

### execute

# ISYS\_MessageBusTask.execute property

任务处理

## 签名

```typescript
execute: (message: any) => Promise<void>;
```

### running

# ISYS\_MessageBusTask.running property

检查运行状态

## 签名

```typescript
running: () => boolean;
```
