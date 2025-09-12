# Node.js Version Management Setup

## ✅ What's Been Configured

Your project is now set up to automatically use Node.js v20. Here's what I've added:

### Files Created/Updated:

1. **`.nvmrc`** - Contains `20` to specify Node.js v20
2. **`package.json`** - Added engines field requiring Node.js >=20.0.0

## 🚀 How It Works

### Automatic Version Switching with nvm

When you or team members enter this project directory, they can run:

```bash
nvm use
```

This will automatically switch to Node.js v20 based on the `.nvmrc` file.

### Current Status
- ✅ Node.js v20.19.5 installed
- ✅ Currently using Node.js v20.19.5
- ✅ npm v10.8.2 active

## 📋 Setup for Team Members

If someone else works on this project, they need to:

1. **Install nvm** (if not already installed):
   ```bash
   # macOS/Linux
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   
   # Or using Homebrew on macOS
   brew install nvm
   ```

2. **Use the project's Node.js version**:
   ```bash
   cd /path/to/your/project
   nvm use  # This reads .nvmrc and switches to Node.js v20
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## 🔄 Alternative Methods

### 1. Automatic Directory Switching (Recommended)

Add this to your shell profile (`.zshrc`, `.bashrc`, etc.):

```bash
# Automatically switch Node.js versions when entering directories with .nvmrc
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

### 2. Using Volta (Alternative to nvm)

If you prefer Volta over nvm:

```bash
# Install Volta
curl https://get.volta.sh | bash

# Pin Node.js version
volta pin node@20
```

### 3. Using fnm (Fast Node Manager)

Another alternative:

```bash
# Install fnm
curl -fsSL https://fnm.vercel.app/install | bash

# Use .nvmrc
fnm use
```

## 🛠 Project Scripts

Your package.json now includes:

```json
{
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

This ensures:
- npm will warn if someone uses an incompatible Node.js version
- Deployment platforms will use the correct version
- CI/CD systems can enforce the version requirement

## 🚨 Important Notes

1. **Dependencies**: Some packages might need updating for Node.js v20 compatibility
2. **Gatsby**: Your Gatsby v5.13.4 is compatible with Node.js v20
3. **Firebase**: Your Firebase v11.9.1 works well with Node.js v20

## 🧪 Testing the Setup

Run these commands to verify everything works:

```bash
# Check versions
node --version  # Should show v20.x.x
npm --version   # Should show v10.x.x

# Test your project
npm install     # Install dependencies
npm run develop # Start development server
```

## 📝 Next Steps

1. **Update dependencies** if needed:
   ```bash
   npm update
   ```

2. **Test your application** thoroughly with Node.js v20

3. **Update CI/CD** configurations to use Node.js v20

4. **Share this guide** with your team members

## 🔍 Troubleshooting

### If `nvm use` doesn't work:
```bash
# Make sure nvm is loaded in your shell
source ~/.nvm/nvm.sh

# Or add to your shell profile
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
```

### If dependencies fail to install:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```