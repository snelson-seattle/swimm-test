---
title: How to save to Local Storage
---
&nbsp;

<SwmSnippet path="/src/utils/storage.tsx" line="3">

---

To save a task list to Local Storage, use the <SwmToken path="/src/utils/storage.tsx" pos="3:4:4" line-data="export const saveTasksToLocalStorage = (data: Task[]) =&gt; {">`saveTasksToLocalStorage`</SwmToken> function.

```tsx
export const saveTasksToLocalStorage = (data: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(data));
};
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBc3dpbW0tdGVzdCUzQSUzQXNuZWxzb24tc2VhdHRsZQ==" repo-name="swimm-test"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
