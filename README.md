# Taut CLI - Limit, Analyze, Secure NPM Project Dependencies

[![npm version](https://badge.fury.io/js/taut-cli.svg)](https://badge.fury.io/js/taut-cli) ![npm downloads](https://img.shields.io/npm/dt/taut-cli) ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**Taut** is a Node CLI tool designed to help developers analyze project dependencies for performance and security risks **before** installation. It inspects new and existing dependencies for file system interactions, large file sizes, and network requests, providing security and performance transparency.

> 🛠 **Why Use Taut?**
>
> - **Enhanced Performance**: Prevent package bloat by flagging dependencies that exceed 5MB in size.
> - **Security First**: Detect packages that interact with the file system or initiate network connections.
> - **Peace of Mind**: Get full transparency into what your dependencies do, without surprises after installation.

---

## 📦 Features

- **Pre-install Package Inspection**: Get real-time feedback on filesystem or network interactions and file size expansions before installing any new package.
- **Existing Dependency Analysis**: Review your project’s current dependencies (`node_modules`) for performance or security risks.
- **Clear Reporting**: Get detailed reports of potential issues to make informed decisions.

---

## 🛠 Installation

To install the Taut CLI globally, run the following command:

```bash
npm install -g taut-cli
```

---

## 🚀 Usage

### Pre-Install Inspection

Before installing a package, run:

```bash
taut install <package-name>
```

This will:
1. Analyze the package metadata.
2. Detect large files (over 5MB), filesystem interactions, and network requests.
3. Ask for confirmation before proceeding with the installation.

### Analyze Existing Dependencies

To inspect your current project's dependencies:

```bash
taut analyze
```

This will:
1. Scan your existing `node_modules` for large files, filesystem access, and network calls.
2. Provide a detailed report of any issues found.

---

## ⚠️ Example of Issues Detected

| Issue Type             | Example Package         | Details                                               |
|------------------------|-------------------------|-------------------------------------------------------|
| **Large File Size**     | `example-large-package`  | Expands to **6.2MB** uncompressed, which exceeds the 5MB limit. |
| **File System Interaction** | `example-fs-package`    | Uses the `fs` module to read/write files.              |
| **Network Access**      | `example-network-package`| Initiates connections via the `http` or `axios` library. |

---

## 📊 Comparison with Other Tools

| Feature                       | **Taut**                                       | **npm audit**                                    |
|-------------------------------|------------------------------------------------|--------------------------------------------------|
| **Pre-install Inspection**     | Yes - Analyze before installing                | No - Inspects only after installation            |
| **File Size Check**            | Yes - Flags packages exceeding size limits     | No                                               |
| **Filesystem/Network Detection** | Yes - Detects `fs` and network interactions    | No                                               |
| **Customizable Checks**        | Planned - Set your own thresholds              | No                                               |
| **Vulnerability Database**     | No - Provides real-time analysis               | Yes - Relies on vulnerability database           |

> **Note**: Taut provides more granular control over your dependencies with real-time, pre-installation analysis, whereas `npm audit` relies on known vulnerabilities and works after installation.

---

## 🔮 Planned Features

- **Customizable Alerts**: Set your own thresholds for file size and other checks.
- **Full Dependency Tree Analysis**: Inspect not only direct dependencies but also nested dependencies.
- **Package Scoring**: Rate packages based on performance and security metrics.
- **CI/CD Integration**: Automate checks in your CI/CD pipeline.

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repo.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/new-feature`).
5. Open a pull request.

### Contribution Guidelines

- Follow [Airbnb’s JavaScript Style Guide](https://github.com/airbnb/javascript) for writing clean, consistent Node.js code.
- Ensure your code passes the linter and unit tests before submitting a pull request.
- Add tests for new features or bug fixes where possible.

---

## 📄 License

This project is licensed under the MIT License.

---

By using tables, quotes, and emojis, this README should now look polished and visually engaging while providing the necessary information. Let me know if you'd like further adjustments or if there’s anything else to add!
