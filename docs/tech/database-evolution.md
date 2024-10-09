---
title: GitHub Documentation
description: A guide to GitHub, GitHub Pages, and GitHub Actions.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Development, Version Control
tags: GitHub, GitHub Pages, GitHub Actions, VCS
---

### Three Levels of Database Modeling

1. **Conceptual Level**: This is the high-level view of the database, where you think about what you’re trying to represent. You map out the real-world things (like "people" or "products") and their relationships without worrying about how they’ll be stored. Common tools for this are ER (Entity-Relationship) diagrams and UML (Unified Modeling Language).

2. **Logical Level**: Here, you figure out how to store the information using computer-friendly data structures, like tables (relational databases) or graphs. You’re still not thinking about the physical storage details yet, just deciding the data organization.

3. **Physical Level**: This layer is where you decide on the technical setup—like data files or indexing techniques—so your database can be effectively implemented in the chosen environment.

### History of Database Models

Databases have evolved over time, and they’re generally grouped into three main “generations.”

#### First Generation: **Navigational Models**

- **Hierarchical Model**: Data is stored in a tree structure, like a family tree. It was first used by IBM’s IMS database in the 1960s and was well-suited for specific tasks but could get redundant (repeating information).
- **Network Model**: Also called the CODASYL model, it connected data records using binary relationships. Unlike tables in relational databases, these models are “navigational,” meaning you search data step-by-step.

#### Second Generation: **Relational Model**

- **Relational Model**: Proposed by E.F. Codd in 1970, this became very popular because it organized data into tables with rows and columns, making data easier to manage and query. Rows represent individual items, columns are their characteristics, and tables are lists of similar items.
- **Why it’s popular**: Relational databases are simple to use, have a mature ecosystem, and are based on strong mathematical principles. Examples include MySQL, PostgreSQL, and Oracle.

#### Third Generation: **Post-Relational Models**

With new needs emerging, databases adapted and extended the relational model.

1. **Object-Relational Databases**: This approach builds on relational databases by adding “objects,” such as custom data types and inheritance (like in object-oriented programming). It’s a blend of traditional tables and more complex data handling.

2. **Object Databases**: These are databases designed around objects (individual data items), where the data is stored as objects (not tables), similar to objects in programming languages like Java or Python.

3. **XML Databases**: They were designed to store and process data in XML format, which is widely used in web and data transfer applications.

4. **NoSQL Databases**: Created to handle massive amounts of data, these include key-value stores, document stores, and graph databases. They’re used in Big Data applications where relational databases don’t perform well. For example, MongoDB (document database) and Neo4j (graph database).

5. **NewSQL**: Combines the scalability of NoSQL with the data consistency of relational databases, useful for applications needing both reliability and high performance.

### Important Points About Relational Databases

The relational model works well for many applications, but it struggles with:

- Complex data types, such as hierarchical or nested data.
- Large, complex, and deeply connected data where multiple tables have to be joined, which can affect performance.

### Transition to Modern Databases

The evolution didn’t stop at relational databases. The rise of Big Data brought challenges that traditional databases couldn’t handle well, leading to the development of NoSQL and NewSQL databases. These modern databases were designed to manage vast and varied data more efficiently, especially for web and cloud applications.
