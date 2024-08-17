---
title: Excel Formulas Documentation
description: A guide to various Excel formulas and functions covered in today's session.
owner: Kaushal Raj
author: Kaushal Raj
categories: Excel, Spreadsheets, Formulas
tags: Excel, Google Sheets, Formulas, Data Analysis
---

# Excel & Google Sheets Formula Reference Guide

## Table of Contents

1. [Basic Arithmetic and Rounding](#basic-arithmetic-and-rounding)
   - [DIVIDE Function](#divide-function)
   - [ROUND Function](#round-function)
2. [SUM and Average Calculation](#sum-and-average-calculation)
   - [SUM Function](#sum-function)
   - [Combining SUM and DIVIDE with ROUND](#combining-sum-and-divide-with-round)
3. [Working with Multiple Sheets](#working-with-multiple-sheets)
   - [Referencing Data from Another Sheet](#referencing-data-from-another-sheet)
   - [Dynamic Sheet References](#dynamic-sheet-references)
4. [Linking Data Between Google Sheets](#linking-data-between-google-sheets)
   - [IMPORTRANGE Function](#importrange-function)
   - [Using IMPORTRANGE with Dynamic Cell References](#using-importrange-with-dynamic-cell-references)

## Basic Arithmetic and Rounding

### DIVIDE Function

The `DIVIDE` function is used to divide one number by another.

**Syntax:**

```plaintext
=DIVIDE(numerator, denominator)
```

**Example:**

```plaintext
=DIVIDE(C9, 12)
```

This divides the value in cell `C9` by `12`.

### ROUND Function

The `ROUND` function is used to round a number to a specified number of digits.

**Syntax:**

```plaintext
=ROUND(number, num_digits)
```

**Example:**

```plaintext
=ROUND(DIVIDE(C9, 12), 0)
```

This divides the value in `C9` by `12` and rounds the result to the nearest whole number.

---

## SUM and Average Calculation

### SUM Function

The `SUM` function is used to add up a range of numbers.

**Syntax:**

```plaintext
=SUM(range)
```

**Example:**

```plaintext
=SUM(C19:C28)
```

This adds up all the values from cell `C19` to `C28`.

### Combining SUM and DIVIDE with ROUND

You can combine `SUM`, `DIVIDE`, and `ROUND` to calculate an average and round it.

**Syntax:**

```plaintext
=ROUND(SUM(range)/divisor, num_digits)
```

**Example:**

```plaintext
=ROUND(SUM(C19:C28)/12, 0)
```

This sums the values from `C19` to `C28`, divides by `12`, and rounds the result to the nearest whole number.

---

## Working with Multiple Sheets

### Referencing Data from Another Sheet

To reference a cell from another sheet in the same workbook, use the sheet name followed by an exclamation mark.

**Syntax:**

```plaintext
=SheetName!Cell
```

**Example:**

```plaintext
=January!A38
```

This references cell `A38` from the sheet named `January`.

### Dynamic Sheet References

If you want the sheet name to be dynamic (e.g., coming from another cell), you can use the `INDIRECT` function.

**Syntax:**

```plaintext
=INDIRECT("'" & CellContainingSheetName & "'!CellReference")
```

**Example:**

```plaintext
=INDIRECT("'" & B4 & "'!A38")
```

This formula uses the sheet name in cell `B4` and references `A38` in that sheet.

---

## Linking Data Between Google Sheets

### IMPORTRANGE Function

The `IMPORTRANGE` function is used to import data from one Google Sheet to another.

**Syntax:**

```plaintext
=IMPORTRANGE("spreadsheet_url", "range_string")
```

**Example:**

```plaintext
=IMPORTRANGE("1pCZ9dTPq0YfoT5oslhC0U_qsPLVF1Kc7ZiPC0TKkmlk", "2024!O19")
```

This imports the value from cell `O19` in the `2024` sheet from another Google Sheet with the specified URL.

### Using IMPORTRANGE with Dynamic Cell References

To make the sheet name or range dynamic, use the `IMPORTRANGE` function with the `INDIRECT` function.

**Syntax:**

```plaintext
=IMPORTRANGE("spreadsheet_url", INDIRECT("range_string"))
```

**Example:**

```plaintext
=IMPORTRANGE("1pCZ9dTPq0YfoT5oslhC0U_qsPLVF1Kc7ZiPC0TKkmlk", INDIRECT("'" & B4 & "'!O19"))
```

This dynamically references the sheet and cell specified in `B4`.

---
