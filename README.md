# Project Setup and Execution Guide

## Introduction

This guide provides detailed instructions for configuring and running the Project application. It includes steps for updating connection strings, performing database migration, starting the server, and running the Angular front-end.

## Prerequisites

- Local SQL Server installation.
- Visual Studio with the Project solution.
- Visual Studio Code with Angular CLI.
- npm (Node Package Manager).

## Configuration Steps

### 1. Update Connection Strings

**Files to Update**:
- `Project.DbMigrator.appsettings.json`
- `Project.HttpApi.Host.appsettings.json`

**Action**:
Update the connection strings in these files to align with your local SQL Server configuration.

### 2. Database Migration

**Tool**:
- DbMigrator

**Action**:
Execute DbMigrator to apply the database schema changes according to the new connection strings.

### 3. Start the HTTP API Host

**Environment**:
- Visual Studio

**Action**:
Run the `Project.HttpApi.Host` project from Visual Studio to initiate the backend server.

## Running the Angular Application

### 1. Open Visual Studio Code Terminal

- Open `angular` project
- Open terminal in Visual Studio Code
- Execute ```npm install```

### 2. Start Angular App

**Command**:
```bash
npm start
