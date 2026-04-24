# LC\_DESIGN\_COMPONENTS type

## Signature

```typescript
type LC_DESIGN_COMPONENTS = {
    [K in KComponentsIndex]: (props: ReactComponentProps<K>) => React.ReactElement;
};
```