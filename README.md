# Unhandled Exception in Next.js Application

This repository demonstrates a common issue in Next.js applications: unhandled exceptions causing the application to crash.  The `/about` page throws an error, resulting in a poor user experience. The solution demonstrates how to gracefully handle this using error boundaries.

## Bug

The `/about.js` file throws a JavaScript error without any error handling.  This causes the entire Next.js application to crash and display a generic error to the user.

## Solution

The `/aboutSolution.js` file demonstrates the use of an error boundary to catch and handle the exception gracefully.  It provides a more user-friendly message and prevents the application from crashing.