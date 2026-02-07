---
sidebar_position: 2
title: 集合框架
---

# Java 集合框架

:::tip
集合框架是 Java 面试高频考点，建议结合源码理解实现原理。
:::

## ArrayList

`ArrayList` 基于动态数组实现，支持随机访问。

```java
import java.util.ArrayList;
import java.util.List;

public class ArrayListDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("Go");

        for (String item : list) {
            System.out.println(item);
        }
    }
}
```

## 集合对比

| 类型 | 底层结构 | 线程安全 | 有序性 |
|-----|---------|---------|--------|
| ArrayList | 数组 | 否 | 插入顺序 |
| LinkedList | 双向链表 | 否 | 插入顺序 |
| HashSet | 哈希表 | 否 | 无序 |
| TreeSet | 红黑树 | 否 | 自然排序 |
| HashMap | 哈希表 | 否 | 无序 |

## HashMap 复杂度

HashMap 查找时间复杂度：

- 理想情况：$O(1)$
- 最坏情况：$O(n)$
- JDK 8+ 红黑树优化：$O(\log n)$

哈希计算：

$$
index = hash(key) \mod capacity
$$

## 配置示例

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: ${DB_PASSWORD}
  redis:
    host: localhost
    port: 6379
```

## SQL 示例

```sql
SELECT u.id, u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5;
```
