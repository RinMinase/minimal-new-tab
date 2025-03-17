# Minimal New Tab

<p align="center">
    <a href="https://svelte.dev/">
        <img alt="Svelte" src="https://img.shields.io/badge/Svelte-%5E5.0-FF3E00.svg?logo=svelte&style=for-the-badge&logoColor=white">
    </a>
    <a href="https://vitejs.dev/">
        <img alt="Vite" src="https://img.shields.io/badge/Vite-%5E6.0-646CFF.svg?logo=vite&style=for-the-badge&logoColor=white">
    </a>
</p>

## Introduction
An extremely lightweight, minimalistic new tab. Contents of it are only a dark/light mode switcher, date and time, search bar.

![Light](https://github.com/RinMinase/minimal-new-tab/blob/main/.github/sample-light.png?raw=true)
![Dark](https://github.com/RinMinase/minimal-new-tab/blob/main/.github/sample-dark.png?raw=true)


## Adding the extension to Chrome

**Note**: Due to Google Chrome's limitation on installing non-store CRX (Chrome Extensions) files, you need to need to install it with the built files.

1. Navigate to the [releases section](https://github.com/RinMinase/minimal-new-tab/releases) and download the latest release, or [click here](https://github.com/RinMinase/minimal-new-tab/releases/latest/download/newtab.zip) to download it.

2. Unzip the file using your prefered tool.

3. Navigate to Google Chrome's extension page `(chrome://extensions/)` and toggle `Developer mode` on.

4. Click `Load unpacked` and select the folder you unzipped in Step 2.

5. Open a new tab. This should show a dialog to either keep or restore the previous "new tab page".

6. Select `Keep`.

7. That's all! Enjoy.


## Compiling the project

**Requirements:**
- [Bun](https://bun.sh/) (preferrable)
    - or NodeJS

1. Clone the project

    ```
    git clone https://github.com/RinMinase/minimal-new-tab.git
    cd minimal-new-tab
    ```

2. Install the necessary dependencies

    ```bash
    bun install
    ```

    Or `yarn install` or `npm install` if you are using `NodeJS` instead of `Bun`.

3. Build the project

    ```bash
    bun run build
    ```

    Or `yarn build` or `npm build` if you are using `NodeJS` instead of `Bun`.

    This generates a `/dist` folder with the built files in it.

4. Open Google Chrome, and navigate to its extension page `(chrome://extensions/)` and toggle `Developer mode` on.

5. Click `Load unpacked` and select the `/dist` folder generated from Step 3 earlier

6. Open a new tab. This should show a dialog to either keep or restore the previous "new tab page".

7. Select `Keep`.

8. That's all! Enjoy.


## Why?

Previously I kept using momentum, but ever since it added its `Plus` tier subscription it has been riddled with stuff I do not want such as:
- Current weather (why? I can see the weather outside)
- Mantra
- Focus Mode
- Login
- Notes / Todo List
- Links

And now... Another [AI](https://momentumdash.com/blog/Ask-ai) slapped into another product.

You can turn most of the things I mentioned earlier to off, but turning it "off" is just hiding the feature. RAM is still _most likely_ being used from these things despite being off.

So I decided, yet again, to branch off and create my own. [XKCD Link Here :)](https://imgs.xkcd.com/comics/standards_2x.png)
