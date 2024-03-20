---
title: How to retrieve tasks from Local Storage
---
<SwmSnippet path="/src/utils/storage.tsx" line="7">

---

Use <SwmToken path="/src/utils/storage.tsx" pos="7:4:4" line-data="export const fetchTasksFromLocalStorage = () =&gt; {">`fetchTasksFromLocalStorage`</SwmToken> to retrieve the list of saved tasks from Local Storage. If no tasks exist, the function returns null.

```tsx
export const fetchTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    return JSON.parse(tasks);
  }

  return null;
};
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBc3dpbW0tdGVzdCUzQSUzQXNuZWxzb24tc2VhdHRsZQ==" repo-name="swimm-test"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
