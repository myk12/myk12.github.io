---
layout: doc
title: "Just say NO to Paxos Overhead: Replacing Consensus with Network Ordering"
conference: OSDI'16
authors:
    - Jialin Li
    - Ellis Michael
    - Naveen Kr. Sharma
    - Adriana Szekeres
    - Dan R. K. Ports
affiliation: 
    - University of Washington
date: 2025-10-24
---

***This paper offloads message ordering to the network to reduce the overhead of traditional consensus protocols like Paxos.***

## Abstract
NoPaxos is a consensus protocol that leverages network ordering to achieve high performance and fault tolerance in distributed systems. By utilizing the inherent ordering guarantees provided by modern network infrastructures, NoPax

os simplifies the traditional Paxos protocol, reducing latency and improving throughput.

## Key Features
- **Network Ordering**: NoPaxos relies on the network to provide a total ordering of messages, eliminating the need for complex leader election and log replication mechanisms.
- **Fault Tolerance**: The protocol can tolerate a specified number of node failures while still ensuring consistency and availability.
- **Scalability**: NoPaxos is designed to scale efficiently with the number of nodes in the system, making it suitable for large distributed applications.