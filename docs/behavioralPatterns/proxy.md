# Dessing Pattern Proxy

## Description

The Proxy Pattern is a structural design pattern that provides an object that acts as a placeholder for another object to control access to it. It is often used to add an extra level of control over the interaction with the real object. The Proxy Pattern is part of the Gang of Four (GoF) design patterns and is commonly used in various software systems.

## Here's an explanation of the key components and the purpose of the Proxy Pattern:

1. **Real Subject** (or Real Object): This is the actual object that the proxy represents. The real subject is typically expensive to create or requires some control over its access.

1. **Proxy**: The proxy is an interface or class that provides the same interface as the real subject. It acts as a surrogate or placeholder for the real subject and controls access to it. The proxy may perform various tasks, such as lazy initialization, access control, logging, or caching, before delegating requests to the real subject.

1. **Client**: The client is the code or component that interacts with the proxy. The client is often unaware that it is communicating with a proxy instead of the real subject.

## The Proxy Pattern can be used for various purposes, including:

**Lazy Initialization**: The real subject is only created when it is actually needed, improving performance and resource utilization.

**Access Control**: The proxy can control access to the real subject by enforcing security checks or permissions.

**Logging**: The proxy can log requests and responses, providing insights into the interactions with the real subject.

**Caching**: The proxy can cache results to avoid redundant computations when the same request is made multiple times.

**Remote Proxies**: In distributed systems, a proxy can represent an object located on a remote server, allowing local clients to interact with remote objects as if they were local.

## Example code

<!-- tabs:start -->

#### **Typescript**

[proxy.ts](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/behavioralPatterns/proxy/proxy.ts ':include :type=code')

#### **Python**

[proxy.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/behavioralPatterns/proxy/proxy.py ':include :type=code')

#### **Ruby**

[proxy.rb](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/behavioralPatterns/proxy/proxy.rb ':include :type=code')

<!-- tabs:end -->
