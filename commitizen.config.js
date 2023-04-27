module.exports = {
    types: [
        {
            value: 'feat',
            name: 'feat:      A new feature',
        },
        {
            value: 'fix',
            name: 'fix:       A bug fix',
        },
        {
            value: 'docs',
            name: 'docs:      Documentation only changes',
        },
        {
            value: 'style',
            name: 'style:     Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
        },
        {
            value: 'refactor',
            name: 'refactor:  A code change that neither fixes a bug nor adds a feature',
        },
        {
            value: 'remove',
            name: 'remove:  The commit removes a feature from the product. Typically features are deprecated first for a period of time before being removed. Removing a feature from the product may be considered a breaking change that will require a major version number increment',
        },
        {
            value: 'deprecate',
            name: 'deprecate:  The commit deprecates existing functionality, but does not remove it from the product. For example, sometimes older public APIs may get deprecated because newer, more efficient APIs are available. Removing the APIs could break existing integrations so the APIs may be marked as deprecated in order to encourage the integration developers to migrate to the newer APIs while also giving them time before removing older functionality',
        },
        {
            value: 'security',
            name: 'security:  The commit improves the security of the product or resolves a security issue that has been reported',
        },
        {
            value: 'perf',
            name: 'perf:      A code change that improves performance',
        },
        {
            value: 'test',
            name: 'test:      Adding missing tests or correcting existing tests',
        },
        {
            value: 'build',
            name: 'build:     Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
        },
        {
            value: 'ci',
            name: 'ci:        Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
        },
        {
            value: 'chore',
            name: "chore:     Other changes that don't modify src or test files",
        },
        {
            value: 'revert',
            name: 'revert:    Reverts a previous commit',
        },
    ],

    scopes: [
        {
            name: 'src',
        },
    ],
    allowCustomScopes: true,
    allowBreakingChanges: false,
};
