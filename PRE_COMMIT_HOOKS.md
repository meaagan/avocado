# Pre-commit Hooks Setup Guide

## ✅ What's Been Set Up

Your project now has automatic code quality enforcement through pre-commit hooks!

### 🔧 Components Installed

1. **Husky** - Git hooks manager
2. **Lint-staged** - Runs commands only on staged files
3. **Pre-commit hook** - Automatically runs before each commit

## 🚀 How It Works

### **Automatic Process:**
When you run `git commit`, the following happens automatically:

1. **Husky** intercepts the commit
2. **Lint-staged** identifies staged files
3. **ESLint** runs with auto-fix on `.js/.jsx` files
4. **Prettier** formats all staged files
5. **Commit proceeds** if no unfixable errors
6. **Commit blocked** if there are linting errors that can't be auto-fixed

### **Files Processed:**
```json
{
  "src/**/*.{js,jsx}": [
    "eslint --fix",        // Fix linting issues
    "prettier --write"     // Format code
  ],
  "src/**/*.{json,md,css}": [
    "prettier --write"     // Format other files
  ]
}
```

## 📝 Usage Examples

### **Normal Workflow:**
```bash
# Make your changes
git add src/components/MyComponent.js

# Commit (hooks run automatically)
git commit -m "Add new component"

# ✅ If no issues: commit succeeds
# ❌ If issues exist: commit blocked with error details
```

### **What You'll See:**

#### ✅ **Successful Commit:**
```bash
$ git commit -m "Update component"
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
[main abc1234] Update component
 1 file changed, 5 insertions(+), 2 deletions(-)
```

#### ❌ **Blocked Commit:**
```bash
$ git commit -m "Update with errors"
✔ Preparing lint-staged...
❌ Running tasks for staged files...
  ❌ eslint --fix found errors:
    src/components/MyComponent.js
      5:1  error  'unusedVar' is assigned a value but never used  no-unused-vars
      
husky - pre-commit hook exited with code 1 (error)
```

## 🛠 Manual Commands

### **Test the Hook:**
```bash
# Test lint-staged without committing
npx lint-staged
```

### **Skip Hooks (Emergency Only):**
```bash
# Skip pre-commit hook (not recommended)
git commit -m "Emergency fix" --no-verify
```

### **Run on All Files:**
```bash
# Lint and fix all files (not just staged)
npm run lint:fix
```

## 🔧 Configuration

### **Current lint-staged Config:**
Located in `package.json`:
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "src/**/*.{json,md,css}": [
      "prettier --write"
    ]
  }
}
```

### **Customization Options:**

#### **Add More File Types:**
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write"
    ]
  }
}
```

#### **Add Testing:**
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write",
      "npm test -- --findRelatedTests --passWithNoTests"
    ]
  }
}
```

#### **Add Type Checking:**
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "src/**/*.{ts,tsx}": [
      "tsc --noEmit"
    ]
  }
}
```

## 🎯 Additional Hooks

### **Add More Git Hooks:**

#### **Pre-push Hook:**
```bash
# Create pre-push hook
echo 'npm run lint:check' > .husky/pre-push
chmod +x .husky/pre-push
```

#### **Commit Message Hook:**
```bash
# Create commit-msg hook for conventional commits
echo 'npx commitlint --edit $1' > .husky/commit-msg
chmod +x .husky/commit-msg
```

#### **Post-merge Hook:**
```bash
# Create post-merge hook to install dependencies
echo 'npm install' > .husky/post-merge
chmod +x .husky/post-merge
```

## 🚨 Troubleshooting

### **Hook Not Running:**
```bash
# Reinstall husky hooks
npx husky install
```

### **Permission Issues:**
```bash
# Make hooks executable
chmod +x .husky/pre-commit
```

### **Disable Temporarily:**
```bash
# Disable all hooks
git config core.hooksPath /dev/null

# Re-enable hooks
git config core.hooksPath .husky
```

### **Lint-staged Not Working:**
```bash
# Test lint-staged manually
npx lint-staged --debug
```

## 📊 Benefits

With pre-commit hooks, you now have:

- ✅ **Automatic code formatting** before every commit
- ✅ **Consistent code quality** across the team
- ✅ **Early error detection** before code reaches the repository
- ✅ **No more "fix formatting" commits**
- ✅ **Faster code reviews** (focus on logic, not style)
- ✅ **Automatic import organization**
- ✅ **Prevention of common mistakes**

## 🔄 Team Setup

### **For New Team Members:**
```bash
# After cloning the repository
npm install        # Installs husky automatically
npx husky install  # Sets up git hooks
```

### **Sharing with Team:**
The hooks are automatically set up when someone runs `npm install` on your project, thanks to the `husky init` command we ran.

## 🎉 Best Practices

1. **Don't skip hooks** unless it's an emergency
2. **Fix issues locally** rather than forcing commits
3. **Keep hook commands fast** (< 10 seconds)
4. **Test hooks** before pushing to main branch
5. **Document any custom hooks** for your team

Your development workflow is now much more robust and automated! 🚀