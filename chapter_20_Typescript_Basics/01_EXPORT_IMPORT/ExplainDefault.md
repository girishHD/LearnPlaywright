<div align="center">

# 🏷️ Default vs Named Exports — The `export` Keyword

</div>

---

## 📦 SECTION 1 — Named Exports (Non-Default)

<div style="background-color:#1a3a4a; padding:12px; border-radius:8px; border-left:6px solid #4fc3f7;">

### 📄 Source Files — `utils.js` & `testutils.js`

</div>

| File | Export Code |
|------|------------|
| `utils.js` | <pre lang="javascript">export let BASE_URL = "https://api.staging.com";</pre> |
| | <pre lang="javascript">export function formatUpperCaseString(name) {<br>    return "TC_" + name.toUpperCase();<br>}</pre> |
| `testutils.js` | <pre lang="javascript">export let BASE_URL = "https://app.vwo.com";</pre> |
| | <pre lang="javascript">export function formatTestName(name) {<br>    return name.toUpperCase();<br>}</pre> |

<div style="background-color:#1a3a20; padding:12px; border-radius:8px; border-left:6px solid #66ff66;">

### 🔽 Import File — `169_Utils.js`

</div>

```javascript
import { BASE_URL as bul_util, formatUpperCaseString } from "../utils.js";
import { BASE_URL as bul_testtul, formatTestName } from "../testutils.js";
```

<br>

| 🟦 Named Export Rules | Description |
|-----------------------|-------------|
| 🔑 **Keyword** | `export` placed before `let`, `const`, `function`, `class` |
| 🎯 **Import match** | Name **must match** exported name (or use `as` alias) |
| 📊 **Quantity** | Unlimited named exports per file |
| `{ }` **Syntax** | Imported with curly braces: `import { name } from "..."` |
| ✏️ **Aliasing** | `import { originalName as newName }` |

---

## 📦 SECTION 2 — Default Export

<div style="background-color:#1a3a4a; padding:12px; border-radius:8px; border-left:6px solid #ffb74d;">

### 📄 Source File — `logger.js`

</div>

```javascript
export default function log(message) {
    console.log("[LOG] - default " + message);
}

export function log1(message) {
    console.log("[LOGS] " + message);
}
```

<div style="background-color:#3a2a1a; padding:12px; border-radius:8px; border-left:6px solid #ffb74d;">

### 🔽 Import File — `170_Logger.js`

</div>

```javascript
import log from "../logger.js";
```

| 🟧 Default Export Rules | Description |
|-------------------------|-------------|
| 🔑 **Keyword** | `export default` — `default` follows `export` |
| 🎯 **Import name** | Importer can **choose any name** |
| 📊 **Quantity** | Only **one** default per file |
| ❌ `{ }` **Syntax** | Imported **without** curly braces |
| 🔀 **Mixable** | Can coexist with named exports in same file |

```javascript
// Importing BOTH default + named from same file:
import log, { log1 } from "../logger.js";
```

---

## 📊 SECTION 3 — Side-by-Side Comparison

<table align="center">
  <thead>
    <tr style="background-color:#2c3e50;">
      <th style="padding:12px; text-align:left;">Feature</th>
      <th style="padding:12px; text-align:center; background-color:#1a4a6e; color:#4fc3f7;">Named Export</th>
      <th style="padding:12px; text-align:center; background-color:#5a3a1a; color:#ffb74d;">Default Export</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#1a1a2e;">
      <td style="padding:10px; font-weight:bold;">Keyword</td>
      <td style="padding:10px; text-align:center;"><code>export let / const / function</code></td>
      <td style="padding:10px; text-align:center;"><code>export default function / class</code></td>
    </tr>
    <tr style="background-color:#16213e;">
      <td style="padding:10px; font-weight:bold;">Quantity per file</td>
      <td style="padding:10px; text-align:center;">♾️ Unlimited</td>
      <td style="padding:10px; text-align:center;">1️⃣ Exactly one</td>
    </tr>
    <tr style="background-color:#1a1a2e;">
      <td style="padding:10px; font-weight:bold;">Import syntax</td>
      <td style="padding:10px; text-align:center;"><code>import { exactName }</code></td>
      <td style="padding:10px; text-align:center;"><code>import anyName</code></td>
    </tr>
    <tr style="background-color:#16213e;">
      <td style="padding:10px; font-weight:bold;">Rename on import</td>
      <td style="padding:10px; text-align:center;"><code>import { a as b }</code></td>
      <td style="padding:10px; text-align:center;">✅ Not needed (any name works)</td>
    </tr>
    <tr style="background-color:#1a1a2e;">
      <td style="padding:10px; font-weight:bold;">Curly braces <code>{ }</code></td>
      <td style="padding:10px; text-align:center;">✅ Required</td>
      <td style="padding:10px; text-align:center;">❌ Not used</td>
    </tr>
    <tr style="background-color:#16213e;">
      <td style="padding:10px; font-weight:bold;">Mixable?</td>
      <td style="padding:10px; text-align:center;">✅ Yes (can coexist with default)</td>
      <td style="padding:10px; text-align:center;">✅ Yes (can coexist with named)</td>
    </tr>
    <tr style="background-color:#1a1a2e;">
      <td style="padding:10px; font-weight:bold;">Tree-shaking</td>
      <td style="padding:10px; text-align:center;">⭐ Excellent</td>
      <td style="padding:10px; text-align:center;">👍 Good</td>
    </tr>
  </tbody>
</table>

---

## 🎯 SECTION 4 — Visual Decision Flow

```
                    ┌─────────────────────────────┐
                    │  What is this module for?    │
                    └─────────────┬───────────────┘
                                  │
                    ┌─────────────┴───────────────┐
                    │                              │
                    ▼                              ▼
          ┌─────────────────┐           ┌─────────────────────┐
          │ Multiple things │           │  One primary thing  │
          │ (utils, helpers)│           │  (logger, component)│
          └────────┬────────┘           └──────────┬──────────┘
                   │                               │
                   ▼                               ▼
        ┌──────────────────┐            ┌──────────────────────┐
        │   Named Export   │            │    Default Export    │
        │  export function │            │  export default class │
        │  export const    │            │  export default func  │
        └──────────────────┘            └──────────────────────┘
```

---

## ✅ SECTION 5 — Summary Table

| Scenario | Recommended | Example in Codebase |
|----------|-------------|---------------------|
| Utility functions & constants | **Named export** | `utils.js` — `export let BASE_URL`, `export function formatUpperCaseString` |
| Single-purpose module | **Default export** | `logger.js` — `export default function log` |
| Mixing main + sub-features | **Default + Named** | `logger.js` — `default log` + named `log1` |
| Library with many exports | **Named exports** | `testutils.js` — `export let BASE_URL`, `export function formatTestName` |

---

<div align="center" style="background-color:#1a2a3a; padding:12px; border-radius:8px;">

### 💡 Key Takeaway

**Named exports** = multiple utilities/constants per module &nbsp;|&nbsp; **Default export** = single main purpose per module

Both can coexist — choose based on what your module does!

</div>