# Security Policy

## Supported Versions

We take the security of our users seriously. The following versions of the project are currently being supported and actively maintained for security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

If you are using an unsupported version, we strongly recommend upgrading to the latest version for security fixes and improvements.

## Reporting a Vulnerability

If you discover a security vulnerability, please help us by reporting it via email. We will work with you to understand the issue, reproduce the problem, and address it as quickly as possible.

### How to Report

1. **Email**: Please send an email to `gopicoc2401@gmail.com` with the following information:

   - A description of the vulnerability.
   - Steps to reproduce the issue.
   - If possible, a proof-of-concept code to demonstrate the vulnerability.
   - Your contact information in case we need further clarification.

<!-- 2. **PGP Key**: If you prefer to encrypt your report, please use the following PGP key:
   - **PGP Key ID**: `0x12345678`
   - **Fingerprint**: `1234 5678 9ABC DEF0 1234 5678 9ABC DEF0 1234 5678`
   - [Download PGP Key](https://yourdomain.com/pgp-key.asc) -->

### Response Time

We aim to respond to security vulnerabilities within **48 hours** of receiving your report. Once the vulnerability has been confirmed, we will:

- Acknowledge receipt of your report.
- Provide an estimate of the time required to address the issue.
- Issue a patch as soon as possible.

### Responsible Disclosure

We kindly ask that you give us a reasonable amount of time to address the vulnerability before publicly disclosing it. We will provide updates throughout the process and notify you once a fix has been released.

### Scope

We are currently focusing on the following areas for security reports:

- **Core application functionality**: Any security vulnerabilities in the main React app.
- **API security**: Vulnerabilities in external API integrations (e.g., misuse of API keys, sensitive data exposure).
- **Web security**: Cross-site scripting (XSS), cross-site request forgery (CSRF), and other web-based attacks.

Vulnerabilities related to third-party libraries should be reported to their respective maintainers, but we welcome notifications about vulnerable dependencies if they affect this project.

### Out of Scope

- **Denial of Service (DoS)**: Large-scale attacks are currently outside the scope of this policy.
- **Social Engineering**: Issues related to social engineering attacks are not covered.

## Security Patch Process

Once a vulnerability has been identified and confirmed:

1. A patch will be developed and tested to address the vulnerability.
2. The patch will be released in a new version, with relevant release notes indicating the fix.
3. A notification will be sent to affected users and contributors.

We encourage users to update to the latest version as soon as possible to protect their applications from potential threats.

## Contact

For any further questions, please contact our security team at:

- **Email**: gopicoc2401@gmail.com

We appreciate your efforts in keeping our project safe for everyone!
