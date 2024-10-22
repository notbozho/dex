module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "chore",
                "style",
                "refactor",
                "ci",
                "test",
                "perf",
                "revert",
                "build",
            ],
        ],
        "subject-case": [2, "always", "sentence-case"],
        "body-leading-blank": [2, "always"],
        "footer-leading-blank": [2, "always"],
    },
};
